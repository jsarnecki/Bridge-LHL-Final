import React, { useState, useEffect } from "react";
// import { ActionCableConsumer } from "react-actioncable-provider";
import { ActionCableConsumer } from "@thrash-industries/react-actioncable-provider";
import { API_ROOT } from "../constants";
import NewConversationForm from "./NewConversationForm";
import MessagesArea from "./MessagesArea";
import Cable from "./Cable";
import axios from "axios";
import { useOutlet, useOutletContext } from "react-router-dom";
import ConversationsList from "./Chat/ConversationsList";
import ConversationsArea from "./Chat/ConversationsArea";
import "./Chat.scss";
import { flushSync } from "react-dom";

const findActiveConversation = (conversations, activeConversation) => {
	return conversations.find(
		conversation => conversation.id === activeConversation
	);
};

const sortConversations = conversations => {
	const sortedMessagesConversations = conversations.map(conversation => {
		const sortedMessagesLatestFirst = conversation.messages.sort(
			(a, b) => new Date(b.created_at) - new Date(a.created_at)
		);
		return { ...conversation, messages: sortedMessagesLatestFirst };
	});
	const sortedConversations = sortedMessagesConversations.sort((a, b) => {
		if (!b.messages.length && !a.messages.length) {
			return 0;
		}
		if (!b.messages.length) {
			return -1;
		}
		if (!a.messages.length) {
			return 1;
		}
		return (
			new Date(b.messages[0].created_at) - new Date(a.messages[0].created_at)
		);
	});
	return sortedConversations;
};

export default function Chat(props) {
	const { logged_in_user, isLoggedIn, cableApp } = useOutletContext();

	const [state, setState] = useState({
		conversations: [],
		activeConversation: null,
		friends: {},
	});

	useEffect(() => {
		if (!isLoggedIn) {
			return;
		}
		let conversationsChannel;
		fetch(`${API_ROOT}/conversations`, { credentials: "include" })
			.then(res => res.json())
			.then(conversations => {
				const sortedConversations = sortConversations(conversations);

				setState(prev => {
					// const filteredConversations = sortedConversations.filter(
					// 	conversation => {
					// 		return !conversation.deleted;
					// 	}
					// );

					return {
						...prev,
						conversations: sortedConversations,
						// activeConversation: filteredConversations[0]
						// 	? filteredConversations[0].id
						// 	: null,
					};
				});
			})
			.then(() => {
				if (isLoggedIn) {
					conversationsChannel = cableApp.cable.subscriptions.create(
						{
							channel: "ConversationsChannel",
						},
						{
							connected: () => console.log("connected with this"),
							received: handleReceivedConversation,
							disconnected: () => console.log("disconnected with this"),
						}
					);
				}
			});

		// axios
		// 	.get("http://localhost:3000/friends", {
		// 		withCredentials: true,
		// 	})
		// 	.then(response => {
		// 		setState(prev => {
		// 			return { ...prev, friends: response.data };
		// 		});
		// 	})
		// 	.catch(error => console.log("api errors:", error));

		return () => {
			if (conversationsChannel) {
				conversationsChannel.unsubscribe();
			}
		};
	}, [logged_in_user]);

	const handleClick = id => {
		//sets state now instead of waiting for axios call to resolve to speed up user display
		setState(prev => {
			return { ...prev, activeConversation: id };
		});
		//if logged in user is the requester, then click should not send an axios request as we want the
		//user with pending request to not have conversation unbolded.
		const conversation = [...conversations].find(
			conversation => conversation.id === id
		);
		if (
			!conversation.accepted &&
			logged_in_user.id === conversation.requester_id
		) {
			return;
		}
		//axios request to the server telling it that the latest message for the conversation has now been seen
		axios
			.put(
				`http://localhost:3000/conversations/${id}`,
				{ action_type: "seen" },
				{
					withCredentials: true,
				}
			)

			.then(response => {
				console.log(`conversation id ${id} was successfully seen`);
				// setState(prev => {
				// 	return { ...prev, activeConversation: id };
				// });
			})
			.catch(error => {
				console.log("api errors:", error);
				setState(prev => {
					return { ...prev };
				});
			});
	};

	const handleReceivedConversation = response => {
		const { conversation, action } = response;

		const friend_id =
			conversation.requester_id === logged_in_user.id
				? conversation.accepter_id
				: conversation.requester_id;
		const newConversation = {
			...conversation,
			friend_id,
			friend_first_name:
				friend_id === conversation.accepter_id
					? conversation.accepter.first_name
					: conversation.requester.first_name,
			friend_last_name:
				friend_id === conversation.accepter_id
					? conversation.accepter.last_name
					: conversation.requester.last_name,
		};
		if (action === "create") {
			//Difficult to send a separate message through message channel, so while initializer message is
			//saved in the db, on receiving empty conversation, create a placeholder initializer message in react
			//until conversation is clicked on and rerendered with response from axios call
			newConversation.messages = [
				{
					id: 0,
					text: "request",
					conversation_id: newConversation.id,
					sender_id: newConversation.requester_id,
					receiver_id: newConversation.accepter_id,
					seen: false,
					initializer: true,
					created_at: new Date(),
				},
			];
			setState(prev => {
				return {
					...prev,
					conversations: [newConversation, ...prev.conversations],
					activeConversation:
						newConversation.requester_id !== friend_id
							? newConversation.id
							: prev.activeConversation,
				};
			});
		}
		if (action === "delete") {
			setState(prev => {
				const updatedConversations = prev.conversations.map(
					prevConversation => {
						if (prevConversation.id === conversation.id) {
							return newConversation;
						}
						return prevConversation;
					}
				);
				return {
					...prev,
					conversations: updatedConversations,
					activeConversation:
						prev.activeConversation === conversation.id
							? null
							: prev.activeConversation,
				};
			});
		}
		if (action === "accept") {
			//Difficult to send a separate message through message channel, so while initializer message is
			//saved in the db, on receiving empty conversation, create a placeholder initializer message in react
			//until conversation is clicked on and rerendered with response from axios call
			newConversation.messages = [
				{
					id: 0,
					text: "accept",
					conversation_id: newConversation.id,
					sender_id: newConversation.accepter_id,
					receiver_id: newConversation.requester_id,
					seen: false,
					initializer: true,
					created_at: new Date(),
				},
			];
			setState(prev => {
				if (
					newConversation.requester_id === logged_in_user.id &&
					prev.activeConversation !== newConversation.id
				) {
					newConversation.seen = false;
				}
				const nonUpdatedConversations = prev.conversations.filter(
					prevConversation => {
						return prevConversation.id !== conversation.id;
					}
				);
				return {
					...prev,
					conversations: [newConversation, ...nonUpdatedConversations],
				};
			});
		}
		if (action === "seen") {
			setState(prev => {
				const updatedConversations = prev.conversations.map(
					prevConversation => {
						if (prevConversation.id === conversation.id) {
							return newConversation;
						}
						return prevConversation;
					}
				);
				return {
					...prev,
					conversations: updatedConversations,
				};
			});
		}
	};

	const handleReceivedMessage = response => {
		const { message } = response;

		// const { message, action } = response;
		// if (action === "seen") {
		// 	return setState(prev => {
		// 		const conversations = [...prev.conversations];
		// 		const conversation = conversations.find(
		// 			conversation => conversation.id === message.conversation_id
		// 		);
		// 		conversation.seen = true;
		// 		return { ...prev, conversations };
		// 	});
		// }
		setState(prev => {
			const conversations = [...prev.conversations];
			const conversation = conversations.find(
				conversation => conversation.id === message.conversation_id
			);
			conversation.messages = [...conversation.messages, message];
			if (prev.activeConversation !== conversation.id) {
				conversation.seen = false;
			}

			return { ...prev, conversations: sortConversations(conversations) };
		});
	};

	const { conversations, activeConversation } = state;

	const filteredConversations = conversations.filter(conversation => {
		return !conversation.deleted;
	});

	return (
		<div className="chat">
			{/* {isLoggedIn && (
				<ActionCableConsumer
					channel={{ channel: "ConversationsChannel" }}
					onReceived={handleReceivedConversation}
					onConnected={() => {
						alert("connected");
					}}
				/>
			)} */}

			{/* {state.conversations.length ? (
				<Cable
					conversations={conversations}
					handleReceivedMessage={handleReceivedMessage}
				/>
			) : null} */}
			<div className="chat-display">
				<ConversationsArea
					conversations={filteredConversations}
					handleClick={handleClick}
					logged_in_user={logged_in_user}
					handleReceivedMessage={handleReceivedMessage}
					cableApp={cableApp}
				></ConversationsArea>
				{activeConversation ? (
					<MessagesArea
						conversation={findActiveConversation(
							filteredConversations,
							activeConversation
						)}
						logged_in_user={logged_in_user}
					/>
				) : null}
			</div>
		</div>
	);
}

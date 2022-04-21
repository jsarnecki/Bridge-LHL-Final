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
		fetch(`${API_ROOT}/conversations`, { credentials: "include" })
			.then(res => res.json())
			.then(conversations => {
				const sortedConversations = sortConversations(conversations);

				setState(prev => {
					const filteredConversations = sortedConversations.filter(
						conversation => {
							return !conversation.deleted;
						}
					);

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
					cableApp.cable.subscriptions.create(
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
	}, [logged_in_user]);

	const handleClick = id => {
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
				setState(prev => {
					return { ...prev, activeConversation: id };
				});
			})
			.catch(error => console.log("api errors:", error));
	};

	const handleReceivedConversation = response => {
		const { conversation, action } = response;

		const friend_id =
			conversation.requester_id === logged_in_user.id
				? conversation.accepter_id
				: conversation.requester_id;
		const newConversation = {
			id: conversation.id,
			friend_id,
			friend_first_name:
				friend_id === conversation.accepter_id
					? conversation.accepter.first_name
					: conversation.requester.first_name,
			friend_last_name:
				friend_id === conversation.accepter_id
					? conversation.accepter.last_name
					: conversation.requester.last_name,

			messages: conversation.messages,
			accepted: conversation.accepted,
			requester_id: conversation.requester_id,
			accepter_id: conversation.accepter_id,
			deleted: conversation.deleted,
			seen: conversation.seen,
		};
		if (action === "create") {
			setState(prev => {
				return {
					...prev,
					conversations: [newConversation, ...prev.conversations],
					// activeConversation:
					// 	prev.activeConversation === null
					// 		? newConversation.id
					// 		: prev.activeConversation,
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
			setState(prev => {
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

		setState(prev => {
			const conversations = [...prev.conversations];
			const conversation = conversations.find(
				conversation => conversation.id === message.conversation_id
			);
			conversation.messages = [...conversation.messages, message];
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

import React, { useState, useEffect } from "react";
import { ActionCableConsumer } from "react-actioncable-provider";
import { API_ROOT } from "../constants";
import NewConversationForm from "./NewConversationForm";
import MessagesArea from "./MessagesArea";
import Cable from "./Cable";
import axios from "axios";
import { useOutlet, useOutletContext } from "react-router-dom";

const findActiveConversation = (conversations, activeConversation) => {
	return conversations.find(
		conversation => conversation.id === activeConversation
	);
};

const mapConversations = (conversations, handleClick) => {
	return conversations.map(conversation => {
		return (
			<li key={conversation.id} onClick={() => handleClick(conversation.id)}>
				{conversation.friend_id}
			</li>
		);
	});
};

export default function ConversationsList(props) {
	const { logged_in_user } = useOutletContext();

	const [state, setState] = useState({
		conversations: [],
		activeConversation: null,
		friendships: [],
	});

	useEffect(() => {
		fetch(`${API_ROOT}/conversations`, { credentials: "include" })
			.then(res => res.json())
			.then(conversations =>
				setState(prev => {
					return { ...prev, conversations };
				})
			);
	}, [logged_in_user]);

	const handleClick = id => {
		setState(prev => {
			return { ...prev, activeConversation: id };
		});
	};

	const handleReceivedConversation = response => {
		const { conversation } = response;
		const newConversation = {
			id: conversation.id,
			friend_id:
				conversation.requester_id === logged_in_user.id
					? conversation.accepter_id
					: conversation.requester_id,
			messages: conversation.messages,
		};
		setState(prev => {
			return {
				...prev,
				conversations: [...prev.conversations, newConversation],
			};
		});
	};

	const handleReceivedMessage = response => {
		const { message } = response;
		const conversations = [...state.conversations];
		const conversation = conversations.find(
			conversation => conversation.id === message.conversation_id
		);
		conversation.messages = [...conversation.messages, message];
		setState(prev => {
			return { ...prev, conversations };
		});
	};

	const { conversations, activeConversation, friendships } = state;

	return (
		<div className="conversationsList">
			<ActionCableConsumer
				channel={{ channel: "ConversationsChannel" }}
				onReceived={handleReceivedConversation}
			/>
			{state.conversations.length ? (
				<Cable
					conversations={conversations}
					handleReceivedMessage={handleReceivedMessage}
				/>
			) : null}
			<h2>Conversations V2</h2>
			<h2>Conversations</h2>
			<ul>{mapConversations(conversations, handleClick)}</ul>
			<NewConversationForm logged_in_user={logged_in_user} />
			{activeConversation ? (
				<MessagesArea
					conversation={findActiveConversation(
						conversations,
						activeConversation
					)}
					logged_in_user={logged_in_user}
				/>
			) : null}
		</div>
	);
}

// class ConversationsList extends React.Component {
// 	state = {
// 		conversations: [],
// 		activeConversation: null,
// 	};

// 	componentDidMount = () => {
// 		fetch(`${API_ROOT}/conversations`)
// 			.then(res => res.json())
// 			.then(conversations => this.setState({ conversations }));
// 	};

// 	handleClick = id => {
// 		this.setState({ activeConversation: id });
// 	};

// 	handleReceivedConversation = response => {
// 		const { conversation } = response;
// 		this.setState({
// 			conversations: [...this.state.conversations, conversation],
// 		});
// 	};

// 	handleReceivedMessage = response => {
// 		const { message } = response;
// 		const conversations = [...this.state.conversations];
// 		const conversation = conversations.find(
// 			conversation => conversation.id === message.conversation_id
// 		);
// 		conversation.messages = [...conversation.messages, message];
// 		this.setState({ conversations });
// 	};

// 	render = () => {
// 		const { conversations, activeConversation } = this.state;
// 		return (
// 			<div className="conversationsList">
// 				<ActionCable
// 					channel={{ channel: "ConversationsChannel" }}
// 					onReceived={this.handleReceivedConversation}
// 				/>
// 				{this.state.conversations.length ? (
// 					<Cable
// 						conversations={conversations}
// 						handleReceivedMessage={this.handleReceivedMessage}
// 					/>
// 				) : null}
// 				<h2>Conversations</h2>
// 				<ul>{mapConversations(conversations, this.handleClick)}</ul>
// 				<NewConversationForm />
// 				{activeConversation ? (
// 					<MessagesArea
// 						conversation={findActiveConversation(
// 							conversations,
// 							activeConversation
// 						)}
// 					/>
// 				) : null}
// 			</div>
// 		);
// 	};
// }

// helpers

// const findActiveConversation = (conversations, activeConversation) => {
// 	return conversations.find(
// 		conversation => conversation.id === activeConversation
// 	);
// };

// const mapConversations = (conversations, handleClick) => {
// 	return conversations.map(conversation => {
// 		return (
// 			<li key={conversation.id} onClick={() => handleClick(conversation.id)}>
// 				{conversation.title}
// 			</li>
// 		);
// 	});
// };

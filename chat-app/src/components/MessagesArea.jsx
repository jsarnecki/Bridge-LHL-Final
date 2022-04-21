import React from "react";
import NewMessageForm from "./NewMessageForm";
import "./MessagesArea.scss";
import MessagesList from "./Chat/MessagesList";
import ConversationRequestForm from "./Chat/ConversationRequestForm";

const MessagesArea = ({
	conversation: {
		id,
		friend_id,
		messages,
		friend_first_name,
		friend_last_name,
		accepted,
		requester_id,
		accepter_id,
	},
	logged_in_user,
}) => {
	// console.log("conversation", conversation);
	// if (conversation) {
	// 	const { id, friend_id, messages, friend_first_name, friend_last_name } =
	// 		conversation;
	// }
	return (
		<div className="messagesArea">
			<div className="message-area-banner">
				Friend id: {friend_id} : {friend_first_name + " " + friend_last_name}{" "}
				Conversation id: {id}
			</div>
			{!accepted && (
				<ConversationRequestForm
					friend_id={friend_id}
					accepted={accepted}
					requester_id={requester_id}
					accepter_id={accepter_id}
					conversation_id={id}
				></ConversationRequestForm>
			)}
			{accepted && (
				<MessagesList
					messages={messages}
					friend_id={friend_id}
					friend_first_name={friend_first_name}
					friend_last_name={friend_last_name}
					logged_in_user={logged_in_user}
				></MessagesList>
			)}
			{accepted && (
				<NewMessageForm
					conversation_id={id}
					logged_in_user={logged_in_user}
					friend_id={friend_id}
				/>
			)}
		</div>
	);
};

export default MessagesArea;

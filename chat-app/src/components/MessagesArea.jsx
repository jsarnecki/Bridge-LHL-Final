import React from "react";
import NewMessageForm from "./NewMessageForm";
import "./MessagesArea.scss";
import MessagesList from "./Chat/MessagesList";

const MessagesArea = ({
	conversation: {
		id,
		friend_id,
		messages,
		friend_first_name,
		friend_last_name,
	},
	logged_in_user,
}) => {
	return (
		<div className="messagesArea">
			<h2>Friend id: {friend_id}</h2>
			<h2>Conversation id: {id}</h2>
			<MessagesList
				messages={messages}
				friend_id={friend_id}
				friend_first_name={friend_first_name}
				friend_last_name={friend_last_name}
				logged_in_user={logged_in_user}
			></MessagesList>

			<NewMessageForm
				conversation_id={id}
				logged_in_user={logged_in_user}
				friend_id={friend_id}
			/>
		</div>
	);
};

export default MessagesArea;

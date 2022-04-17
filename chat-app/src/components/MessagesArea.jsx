import React from "react";
import NewMessageForm from "./NewMessageForm";

const MessagesArea = ({
	conversation: { id, friend_id, messages },
	logged_in_user,
}) => {
	return (
		<div className="messagesArea">
			<h2>{friend_id}</h2>
			<ul>{orderedMessages(messages)}</ul>
			<NewMessageForm
				conversation_id={id}
				logged_in_user={logged_in_user}
				friend_id={friend_id}
			/>
		</div>
	);
};

export default MessagesArea;

// helpers

const orderedMessages = messages => {
	const sortedMessages = messages.sort(
		(a, b) => new Date(a.created_at) - new Date(b.created_at)
	);
	return sortedMessages.map(message => {
		return (
			<li key={message.id}>
				{message.sender_id}: {message.text}
			</li>
		);
	});
};

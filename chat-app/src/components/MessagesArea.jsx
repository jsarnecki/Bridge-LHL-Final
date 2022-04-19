import React from "react";
import NewMessageForm from "./NewMessageForm";

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
			<h2>{friend_id}</h2>
			<ul>
				{orderedMessages(
					messages,
					friend_id,
					friend_first_name,
					friend_last_name,
					logged_in_user
				)}
			</ul>
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

const orderedMessages = (
	messages,
	friend_id,
	friend_first_name,
	friend_last_name,
	logged_in_user
) => {
	const sortedMessages = messages.sort(
		(a, b) => new Date(a.created_at) - new Date(b.created_at)
	);
	return sortedMessages.map(message => {
		let sender;
		if (message.sender_id === friend_id) {
			sender = friend_first_name + " " + friend_last_name;
		} else {
			sender = logged_in_user.first_name + " " + logged_in_user.last_name;
		}

		return (
			<li key={message.id}>
				{sender}: {message.text}
			</li>
		);
	});
};

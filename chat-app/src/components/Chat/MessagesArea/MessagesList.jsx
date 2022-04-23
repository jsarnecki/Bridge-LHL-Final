import MessagesListItem from "./MessagesListItem";

export default function MessagesList(props) {
	const {
		messages,
		friend_id,
		friend_first_name,
		friend_last_name,
		logged_in_user,
	} = props;

	const orderedMessages = (
		messages,
		friend_id,
		friend_first_name,
		friend_last_name,
		logged_in_user
	) => {
		// Sort messages and render latest message first (css is flex-direction column-reverse)
		const sortedMessages = messages.sort(
			(a, b) => new Date(b.created_at) - new Date(a.created_at)
		);
		return sortedMessages.map(message => {
			let sender;
			//Different styles for your messages and your friend's messages
			if (message.sender_id === friend_id) {
				sender = friend_first_name + " " + friend_last_name;
				return (
					<MessagesListItem
						message={message}
						sender={sender}
						current_user={false}
						key={message.id}
						friend_first_name={friend_first_name}
					></MessagesListItem>
				);
			} else {
				sender = logged_in_user.first_name + " " + logged_in_user.last_name;
				return (
					<MessagesListItem
						message={message}
						sender={sender}
						current_user={true}
						key={message.id}
						friend_first_name={friend_first_name}
					></MessagesListItem>
				);
			}
		});
	};
	return (
		<ul className="messages-list">
			{orderedMessages(
				messages,
				friend_id,
				friend_first_name,
				friend_last_name,
				logged_in_user
			)}
		</ul>
	);
}

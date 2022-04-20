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
		const sortedMessages = messages.sort(
			(a, b) => new Date(a.created_at) - new Date(b.created_at)
		);
		return sortedMessages.map(message => {
			let sender;
			if (message.sender_id === friend_id) {
				sender = friend_first_name + " " + friend_last_name;
				return (
					<MessagesListItem
						message={message}
						sender={sender}
						current_user={false}
						key={message.id}
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

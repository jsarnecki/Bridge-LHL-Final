export default function ConversationsList(props) {
	const mapConversations = (conversations, handleClick) => {
		return conversations.map(conversation => {
			const sortedMessages = conversation.messages.sort(
				(a, b) => new Date(a.created_at) - new Date(b.created_at)
			);
			const lastMessage = sortedMessages[sortedMessages.length - 1];
			return (
				<li key={conversation.id} onClick={() => handleClick(conversation.id)}>
					{conversation.friend_first_name} {conversation.friend_last_name} id:{" "}
					{conversation.friend_id}
					<br></br>
					{lastMessage &&
						(lastMessage.sender_id === conversation.friend_id
							? conversation.friend_first_name + ":"
							: "You:")}
					{lastMessage && lastMessage.text}
				</li>
			);
		});
	};

	const { conversations, handleClick } = props;

	return <ul>{mapConversations(conversations, handleClick)}</ul>;
}

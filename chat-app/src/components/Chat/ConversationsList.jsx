export default function ConversationsList(props) {
	const mapConversations = (conversations, handleClick) => {
		return conversations.map(conversation => {
			return (
				<li key={conversation.id} onClick={() => handleClick(conversation.id)}>
					{conversation.friend_id}
				</li>
			);
		});
	};

	const { conversations, handleClick } = props;

	return <ul>{mapConversations(conversations, handleClick)}</ul>;
}

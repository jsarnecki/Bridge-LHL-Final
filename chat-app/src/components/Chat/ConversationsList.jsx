import { ActionCableConsumer } from "@thrash-industries/react-actioncable-provider";
import ConversationsListItem from "./ConversationsListItem";
export default function ConversationsList(props) {
	const { conversations, handleClick, handleReceivedMessage, cableApp } = props;

	const mapConversations = (conversations, handleClick) => {
		// return conversations.map(conversation => {
		// 	const sortedMessages = conversation.messages.sort(
		// 		(a, b) => new Date(a.created_at) - new Date(b.created_at)
		// 	);
		// 	const lastMessage = sortedMessages[sortedMessages.length - 1];
		// 	return (
		// 		<li key={conversation.id} onClick={() => handleClick(conversation.id)}>
		// 			{conversation.friend_first_name} {conversation.friend_last_name} id:{" "}
		// 			{conversation.friend_id}
		// 			<br></br>
		// 			{lastMessage &&
		// 				(lastMessage.sender_id === conversation.friend_id
		// 					? conversation.friend_first_name + ":"
		// 					: "You:")}
		// 			{lastMessage && lastMessage.text}
		// 			<ActionCableConsumer
		// 				key={conversation.id}
		// 				channel={{
		// 					channel: "MessagesChannel",
		// 					conversation: conversation.id,
		// 				}}
		// 				onReceived={handleReceivedMessage}
		// 				onConnected={() =>
		// 					alert(
		// 						`message connected here with friend: ${conversation.friend_first_name}`
		// 					)
		// 				}
		// 			/>
		// 		</li>
		// 	);
		// });
	};

	// return <ul>{mapConversations(conversations, handleClick)}</ul>;
	return (
		<ul>
			{conversations.map(conversation => {
				const sortedMessages = conversation.messages.sort(
					(a, b) => new Date(a.created_at) - new Date(b.created_at)
				);
				const lastMessage = sortedMessages[sortedMessages.length - 1];

				return (
					<ConversationsListItem
						key={conversation.id}
						conversation={conversation}
						lastMessage={lastMessage}
						cableApp={cableApp}
						handleClick={handleClick}
						handleReceivedMessage={handleReceivedMessage}
					/>
				);
			})}
		</ul>
	);
}

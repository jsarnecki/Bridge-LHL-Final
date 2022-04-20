import { useEffect } from "react";

export default function ConversationsListItem(props) {
	const {
		conversation,
		cableApp,
		handleClick,
		lastMessage,
		handleReceivedMessage,
	} = props;
	useEffect(() => {
		cableApp.cable.subscriptions.create(
			{
				channel: "MessagesChannel",
				conversation: conversation.id,
			},
			{
				connected: () => {
					console.log(
						`message connected here with friend: ${conversation.friend_first_name}`
					);
				},
				received: handleReceivedMessage,
				disconnected: () =>
					console.log(
						`message disconnected here with friend: ${conversation.friend_first_name}`
					),
			}
		);
	}, []);

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
			{/* <ActionCableConsumer
							key={conversation.id}
							channel={{
								channel: "MessagesChannel",
								conversation: conversation.id,
							}}
							onReceived={handleReceivedMessage}
							onConnected={() =>
								alert(
									`message connected here with friend: ${conversation.friend_first_name}`
								)
							}
						/> */}
		</li>
	);
}

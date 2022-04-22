import { useEffect } from "react";
import classNames from "classnames";
import "./ConversationsListItem.scss";

export default function ConversationsListItem(props) {
	const {
		conversation,
		cableApp,
		handleClick,
		lastMessage,
		handleReceivedMessage,
	} = props;
	useEffect(() => {
		const messageChannel = cableApp.cable.subscriptions.create(
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
		return () => {
			messageChannel.unsubscribe();
		};
	}, []);
	const unseen =
		!conversation.accepted &&
		conversation.friend_id !== conversation.requester_id
			? false
			: !conversation.seen;

	return (
		<li
			key={conversation.id}
			onClick={() => handleClick(conversation.id)}
			className={classNames("conversations-list-item", {
				unseen,
			})}
		>
			{conversation.friend_first_name} {conversation.friend_last_name}
			{/* id:{" "}
			{conversation.friend_id} Conversation id: {conversation.id} */}
			<br></br>
			{lastMessage.initializer &&
				lastMessage.text === "request" &&
				(lastMessage.sender_id === conversation.friend_id
					? conversation.friend_first_name + " has sent you a friend request"
					: "You have sent a friend request ")}
			{lastMessage.initializer &&
				lastMessage.text === "accept" &&
				(lastMessage.sender_id === conversation.friend_id
					? conversation.friend_first_name + " has accepted your friend request"
					: `You have accepted ${conversation.friend_first_name}'s friend request`)}
			{lastMessage &&
				!lastMessage.initializer &&
				(lastMessage.sender_id === conversation.friend_id
					? conversation.friend_first_name + ": "
					: "You: ")}
			{lastMessage &&
				!lastMessage.initializer &&
				(lastMessage.text.length > 20
					? lastMessage.text.slice(0, 20) + "..."
					: lastMessage.text)}
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

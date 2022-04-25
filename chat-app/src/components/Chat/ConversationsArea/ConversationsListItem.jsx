import classNames from "classnames";
import "./styles/ConversationsListItem.scss";

export default function ConversationsListItem(props) {
	const { conversation, handleClick, lastMessage } = props;

	//if friendship not accepted yet and you are the requester, always seen
	//if you are the sender of the latest message, always seen
	const unseen =
		!conversation.accepted &&
		conversation.friend_id !== conversation.requester_id
			? false
			: lastMessage.sender_id !== conversation.friend_id
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
			<img
				className="profile-picture"
				src={`/seed_assets/${conversation.friend_first_name}.png`}
			></img>
			<div className="conversation-preview">
				{conversation.friend_first_name + " " + conversation.friend_last_name}
				<br></br>
				<span className="message-preview">
					{/* If the latest message is a request, set appropriate message preview */}
					{lastMessage.initializer &&
						lastMessage.text === "request" &&
						(lastMessage.sender_id === conversation.friend_id
							? conversation.friend_first_name +
							  " has sent you a friend request"
							: "You have sent a friend request ")}
					{/* If the latest message is a request acceptance, set appropriate message preview */}
					{lastMessage.initializer &&
						lastMessage.text === "accept" &&
						(lastMessage.sender_id === conversation.friend_id
							? conversation.friend_first_name +
							  " has accepted your friend request"
							: `You have accepted ${conversation.friend_first_name}'s friend request`)}
					{lastMessage.edit &&
						(lastMessage.sender_id === conversation.friend_id
							? conversation.friend_first_name + " has made a correction"
							: `You have made a correction`)}

					{/* If the latest message is not an initializer (request or acceptance), and not an edit, set appropriate message preview */}
					{lastMessage &&
						!lastMessage.initializer &&
						!lastMessage.edit &&
						(lastMessage.sender_id === conversation.friend_id
							? conversation.friend_first_name + ": "
							: "You: ")}
					{/* Limit message preview to 20 characters long */}
					{lastMessage &&
						!lastMessage.initializer &&
						!lastMessage.edit &&
						(lastMessage.text.length > 20
							? lastMessage.text.slice(0, 20) + "..."
							: lastMessage.text)}
				</span>
			</div>
		</li>
	);
}

import ConversationsList from "./ConversationsList";
import NewConversationForm from "../NewConversationForm";
export default function ConversationsArea(props) {
	const { conversations, handleClick, logged_in_user } = props;

	return (
		<div className="conversations">
			<ConversationsList
				conversations={conversations}
				handleClick={handleClick}
			></ConversationsList>
			<NewConversationForm logged_in_user={logged_in_user} />
		</div>
	);
}

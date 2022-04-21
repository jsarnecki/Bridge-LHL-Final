import ConversationsList from "./ConversationsList";
import NewConversationForm from "../NewConversationForm";
export default function ConversationsArea(props) {
	const {
		conversations,
		handleClick,
		logged_in_user,
		cableApp,
		handleReceivedMessage,
	} = props;

	const filteredConversations = conversations.filter(conversation => {
		return !conversation.deleted;
	});

	return (
		<div className="conversations">
			<ConversationsList
				conversations={filteredConversations}
				handleClick={handleClick}
				cableApp={cableApp}
				handleReceivedMessage={handleReceivedMessage}
			></ConversationsList>
			<NewConversationForm logged_in_user={logged_in_user} />
		</div>
	);
}

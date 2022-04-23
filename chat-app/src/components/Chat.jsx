import MessagesArea from "./Chat/MessagesArea/MessagesArea";
import { useOutletContext } from "react-router-dom";
import ConversationsArea from "./Chat/ConversationsArea/ConversationsArea";
import "./Chat.scss";

const findActiveConversation = (conversations, activeConversation) => {
	return conversations.find(
		conversation => conversation.id === activeConversation
	);
};

export default function Chat() {
	const {
		logged_in_user,
		cableApp,
		filteredConversations,
		handleClick,
		activeConversation,
		handleReceivedMessage,
	} = useOutletContext();

	return (
		<div className="chat">
			<div className="chat-display">
				<ConversationsArea
					conversations={filteredConversations}
					handleClick={handleClick}
					logged_in_user={logged_in_user}
					handleReceivedMessage={handleReceivedMessage}
					cableApp={cableApp}
				></ConversationsArea>
				{activeConversation ? (
					<MessagesArea
						conversation={findActiveConversation(
							filteredConversations,
							activeConversation
						)}
						logged_in_user={logged_in_user}
					/>
				) : null}
			</div>
		</div>
	);
}

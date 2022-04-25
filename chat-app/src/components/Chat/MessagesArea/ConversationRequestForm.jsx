import AcceptConversationRequest from "./AcceptConversationRequest";
import PendingConversationRequest from "./PendingConversationRequest";
import "./styles/ConversationRequestForm.scss";
export default function ConversationRequestForm(props) {
	const { requester_id, friend_id, conversation_id } = props;

	return (
		<div className="accept-conversation-form">
			{friend_id === requester_id && (
				<AcceptConversationRequest
					conversation_id={conversation_id}
				></AcceptConversationRequest>
			)}
			{friend_id !== requester_id && (
				<PendingConversationRequest
					conversation_id={conversation_id}
				></PendingConversationRequest>
			)}
		</div>
	);
}

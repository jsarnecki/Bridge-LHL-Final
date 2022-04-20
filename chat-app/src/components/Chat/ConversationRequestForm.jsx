import AcceptConversationRequest from "./AcceptConversationRequest";
import PendingConversationRequest from "./PendingConversationRequest";
export default function AcceptConversationForm(props) {
	const { accepted, requester_id, accepter_id, friend_id } = props;

	return (
		<div className="accept-conversation-form">
			{friend_id === requester_id && (
				<AcceptConversationRequest></AcceptConversationRequest>
			)}
			{friend_id !== requester_id && (
				<PendingConversationRequest></PendingConversationRequest>
			)}
			<h2>Not accepted yet</h2>
			<p>Accepted: {accepted.toString()}</p>
			<p>requester_id: {requester_id}</p>
			<p>accepter_id: {accepter_id}</p>
			<p>friend_id: {friend_id}</p>
		</div>
	);
}

import axios from "axios";
export default function AcceptConversationRequest(props) {
	const { conversation_id } = props;
	const handleDeclineRequest = e => {
		e.preventDefault();
		axios
			.delete(`http://localhost:3000/conversations/${conversation_id}`, {
				withCredentials: true,
			})

			.then(response => {
				console.log(
					`conversation id ${conversation_id} was successfully deleted`
				);
			})
			.catch(error => console.log("api errors:", error));
	};

	const handleAcceptRequest = e => {
		e.preventDefault();
		axios
			.put(
				`http://localhost:3000/conversations/${conversation_id}`,
				{},
				{
					withCredentials: true,
				}
			)

			.then(response => {
				console.log(
					`conversation id ${conversation_id} was successfully accepted`
				);
			})
			.catch(error => console.log("api errors:", error));
	};
	return (
		<>
			<h3>You have a friend request, do you wish to accept?</h3>
			<button onClick={handleAcceptRequest}>Accept</button>
			<button onClick={handleDeclineRequest}>Decline</button>
		</>
	);
}

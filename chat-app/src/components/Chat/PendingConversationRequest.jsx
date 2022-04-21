import axios from "axios";

export default function PendingConversationRequest() {
	const handleCancelRequest = () => {
		axios
			.delete(
				"http://localhost:3000/login",
				{
					user: {
						email: "admin@admin.com",
						password: "123456",
					},
				},
				{ withCredentials: true }
			)
			.then(response => {
				if (response.data.logged_in) {
					props.handleLogin(response.data);
					// alert("logged in");
					window.location.reload(false);
				} else {
					alert("error logging in");
				}
			})
			.catch(error => console.log("api errors:", error));
	};
	return (
		<>
			<h3>
				You have sent this person a friend request, do you wish to cancel?
			</h3>
			<button>cancel</button>
		</>
	);
}

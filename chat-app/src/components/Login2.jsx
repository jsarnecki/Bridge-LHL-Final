import { ActionCable } from "react-actioncable-provider";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Login(props) {
	const [state, setState] = useState({
		username: "",
		email: "",
		password: "",
		errors: "",
	});

	const onClick = event => {
		axios
			.post(
				"http://localhost:3000/login",
				{
					user: {
						email: "admin2@admin.com",
						password: "123456",
					},
				},
				{ withCredentials: true }
			)
			.then(response => {
				if (response.data.logged_in) {
					props.handleLogin(response.data);
					alert("logged in");
				} else {
					alert("error logging in");
				}
			})
			.catch(error => console.log("api errors:", error));
	};

	// console.log("hello state.rooms", state.rooms);
	return (
		<div>
			<button onClick={onClick}>Login 2</button>
		</div>
	);
}

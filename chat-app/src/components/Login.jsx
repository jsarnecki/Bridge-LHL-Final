import { ActionCable } from "react-actioncable-provider";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Login() {
	const [state, setState] = useState({ rooms: [] });

	const onClick = event => {
		axios
			.post("http://localhost:3000/login", {
				email: "admin@admin.com",
				password: "123456",
			})
			.then(() => alert("logged in!"));
	};
	// console.log("hello state.rooms", state.rooms);
	return (
		<div>
			<button onClick={onClick}>Login</button>
		</div>
	);
}

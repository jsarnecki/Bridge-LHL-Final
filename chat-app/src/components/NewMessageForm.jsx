import React, { useEffect, useState } from "react";
import { API_ROOT, HEADERS } from "../constants";

export default function NewMessageForm(props) {
	const { conversation_id, logged_in_user, friend_id } = props;
	const [state, setState] = useState({
		text: "",
		conversation_id: null,
		sender_id: null,
		receiver_id: null,
	});

	useEffect(() => {
		setState(prev => {
			return {
				...prev,
				conversation_id: conversation_id,
				sender_id: logged_in_user.id,
				receiver_id: friend_id,
			};
		});
	}, [props]);

	const handleChange = e => {
		setState(prev => {
			return { ...prev, text: e.target.value };
		});
	};

	const handleSubmit = e => {
		e.preventDefault();

		fetch(`${API_ROOT}/messages`, {
			method: "POST",
			headers: HEADERS,
			body: JSON.stringify(state),
		});
		setState(prev => {
			return { ...prev, text: "" };
		});
	};

	return (
		<div className="newMessageForm">
			<form onSubmit={handleSubmit}>
				<label>New Message:</label>
				<br />
				<input type="text" value={state.text} onChange={handleChange} />
				<input type="submit" />
			</form>
		</div>
	);
}

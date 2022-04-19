import React, { useEffect, useState } from "react";
import { API_ROOT, HEADERS } from "../constants";

export default function NewConversationForm(props) {
	const [state, setState] = useState({
		text: "",
		conversation_id: props.conversation_id,
		sender_id: props.logged_in_user.id,
		receiver_id: props.friend_id,
	});

	// componentWillReceiveProps = nextProps => {
	// 	this.setState({ conversation_id: nextProps.conversation_id });
	// };

	// useEffect(() => {
	// 	setState(prev => {
	// 		return { ...prev, conversation_id: props.conversation_id };
	// 	});
	// }, []);

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

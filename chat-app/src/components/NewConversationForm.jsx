import React from "react";
import { API_ROOT, HEADERS } from "../constants";

class NewConversationForm extends React.Component {
	state = {
		title: "always",
		accepter_id: "",
	};

	handleChange = e => {
		this.setState({ accepter_id: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		fetch(`${API_ROOT}/conversations`, {
			method: "POST",
			headers: HEADERS,
			body: JSON.stringify({
				...this.state,
				requester_id: this.props.logged_in_user.id,
			}),
			credentials: "include",
		});
		this.setState({ accepter_id: "" });
	};

	render = () => {
		return (
			<div className="newConversationForm">
				<form onSubmit={this.handleSubmit}>
					<label>New Conversation:</label>
					<br />
					<input
						type="text"
						value={this.state.accepter_id}
						onChange={this.handleChange}
					/>
					<input type="submit" />
				</form>
			</div>
		);
	};
}

export default NewConversationForm;

import classNames from "classnames";
import "./styles/MessagesListItem.scss";
import { useState } from "react";
import EditingForm from "./EditingForm";
export default function MessagesListItem(props) {
	const { message, current_user, friend_first_name } = props;
	const [hover, setHover] = useState(false);
	const [editing, setEditing] = useState(false);

	const handleMouseOver = e => {
		setHover(true);
	};

	const handleMouseOut = e => {
		setHover(false);
	};

	const handleClickEdit = e => {
		setEditing(true);
	};

	const handleClose = e => {
		setEditing(false);
	};

	return (
		<li
			className={classNames("messages-list-item", {
				current_user,
				initializer: message.initializer,
			})}
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
		>
			{!current_user && (
				<img
					class="profile-picture"
					src={`/seed_assets/${friend_first_name}.png`}
				></img>
			)}

			<div className="text-and-edit-section">
				<div className="original-message">
					{<p class="message-text">{message.text}</p>}

					{hover && !current_user && !message.edit && !editing && (
						<i
							onClick={handleClickEdit}
							class="fa-solid fa-pen-to-square edit-button"
						></i>
					)}
				</div>

				{editing && (
					<EditingForm
						oldText={message.text}
						handleClose={handleClose}
					></EditingForm>
				)}
			</div>
		</li>
	);
}

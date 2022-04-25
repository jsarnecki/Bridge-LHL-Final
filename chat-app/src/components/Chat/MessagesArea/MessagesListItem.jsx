import classNames from "classnames";
import "./styles/MessagesListItem.scss";
import { useEffect, useState } from "react";
import EditingForm from "./EditingForm";
import findChange from "../trackChanges";

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

	let oldTextWithStrikes;
	let newTextWithColour;

	if (message.edit) {
		console.log(`message id :${message.id}`);
		const oldTextArr = message.text.split(" ");
		const newTextArr = message.new_text.split(" ");
		const { matched, added, deleted, result } = findChange(
			oldTextArr,
			newTextArr
		);

		oldTextWithStrikes = oldTextArr.map((word, i) => {
			if (deleted.includes(i)) {
				return (
					<span>
						<s className="deleted-text" key={i}>
							{word}
						</s>{" "}
					</span>
				);
			}
			return (
				<span className="matched-text" key={i}>
					{word + " "}
				</span>
			);
		});

		newTextWithColour = newTextArr.map((word, i) => {
			if (added.includes(i)) {
				return <span className="added-text">{word + " "}</span>;
			}
			return (
				<span className="matched-text" key={i}>
					{word + " "}
				</span>
			);
		});
	}

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
					className="profile-picture"
					src={`/seed_assets/${friend_first_name}.png`}
				></img>
			)}

			{!message.edit && (
				<div className="text-and-edit-section">
					<div className="original-message">
						{<p className="message-text">{message.text}</p>}

						{hover && !current_user && !message.edit && !editing && (
							<i
								onClick={handleClickEdit}
								className="fa-solid fa-pen-to-square edit-button"
							></i>
						)}
					</div>

					{editing && (
						<EditingForm
							oldText={message.text}
							handleClose={handleClose}
							message={message}
						></EditingForm>
					)}
				</div>
			)}

			{message.edit && (
				<div className="edited-message">
					<div className="old-text">
						<i className="fa-solid fa-xmark"></i>
						<p className="message-text">{oldTextWithStrikes}</p>
					</div>
					<div className="new-text">
						<i className="fa-solid fa-check"></i>
						<p className="message-text">{newTextWithColour}</p>
					</div>
				</div>
			)}
		</li>
	);
}

import React, { useState, useEffect } from "react";
import "./Profile.scss";

import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import ProfilePopup from "./ProfilePopup";

export default function Profile(props) {
	// State for handling open and closing profilePopup feature
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	// Make DRY by adding to helper function folder
	const flags = function (languageId) {
		switch (languageId) {
			case 1:
				return "🇬🇧";
			case 2:
				return "🇰🇷";
			case 3:
				return "🇯🇵";
			case 4:
				return "🇨🇳";
			case 5:
				return "🇫🇷";
			case 6:
				return "🇪🇸";
			case 7:
				return "🇵🇹";
			case 8:
				return "🇮🇳";
		}
	};

	return (
		<div className="mdc-card mdc-card--outlined profile-card">
			<div>
				<span>{props.firstName}</span> <span>{props.lastName}</span>
			</div>
			<div className="my-card__media">
				<img className="profile-img" src={props.image} />
			</div>
			<div>{props.langauages}</div>
			<div className="languages-container">
				<img id="speak-logo" src="breathable.png" />
				<span className="native">
					{props.languages
						.filter(language => !language.learning)
						.map(language => flags(language.language_id))}
				</span>
				<i className="fa-solid fa-right-left"></i>
				<span className="learning">
					{props.languages
						.filter(language => language.learning)
						.map(language => flags(language.language_id))}
				</span>
				<img id="hear-logo" src="ear.png" />
			</div>

			<br />
			<Button variant="contained" onClick={handleOpen}>
				Expand Profile
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<ProfilePopup
					key={props.id}
					id={props.id}
					firstName={props.firstName}
					lastName={props.lastName}
					image={props.image}
					bio={props.bio}
					languages={props.languages}
					loggedInUser={props.loggedInUser}
					friendRequest={props.friendRequest}
					setFriendRequest={props.setFriendRequest}
				/>
			</Modal>
		</div>
	);
}

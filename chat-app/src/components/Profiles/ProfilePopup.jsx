import "./ProfilePopup.scss";
import Button from "@mui/material/Button";
import { useState } from "react";
import Switch from "@mui/material/Switch";
import { API_ROOT, HEADERS } from "../../constants";

export default function ProfilePopup(props) {
	const { friendRequest, setFriendRequest, id } = props;

	//Flag for enabling editing
	const currentUser = props.currentUser;

	// State for editing bio
	const [edit, setEdit] = useState(props.bio);

	// State for editing bio button click
	const [clickEdit, setClickEdit] = useState(false);

	const handleChange = function (event) {
		setEdit(event.target.value);
	};

	const handleClick = event => {
		// Handles sending friend request
		event.preventDefault();

		fetch(`${API_ROOT}/conversations`, {
			method: "POST",
			headers: HEADERS,
			body: JSON.stringify({
				accepter_id: id,
				requester_id: props.loggedInUser.id,
			}),
			credentials: "include",
		})
			.then(res => {
				console.log("API_root/convo res.data", res.data);
				setFriendRequest(prev => {
					const newState = { ...prev };
					newState[id] = true;
					return newState;
				});
			})
			.catch(err => console.log("API_root/convo err:", err));
	};

	// Maps over the languages to return learning or native, language name along with skill lvl
	const languages = props.languages.map(lang => {
		const stars = function (level) {
			let star = "⭐";
			return star.repeat(level);
		};

		let skillLevel = stars(lang.skill_level);

		return (
			<div>
				<li>
					{lang.learning ? "Learning: " : "Native: "}
					{lang.language_name}
				</li>
				<li>{skillLevel}</li>
			</div>
		);
	});

	return (
		<div
			className="popup-box"
			// style={{
			// 	"background-color": props.checked ? "#2e2d2d" : "white",
			// 	color: props.checked ? "white" : "black",
			// }}
		>
			<div id="modal-modal-title" variant="h6" component="h2">
				{props.firstName} {props.lastName}
			</div>

			<div className="popup-top">
				<img className="popup-img" src={props.image} />
				<ul>{languages}</ul>
			</div>

			{currentUser && (
				<Button
					variant="contained"
					onClick={() => setClickEdit(clickEdit ? false : true)}
				>
					Edit
				</Button>
			)}

			{currentUser && clickEdit && (
				<form>
					<textarea
						type="text"
						name="edit"
						value={edit}
						onChange={e => handleChange(e)}
					/>
				</form>
			)}

			{!clickEdit && (
				<div id="modal-modal-description" sx={{ mt: 2 }}>
					{props.bio}
				</div>
			)}

			<div className="popup-button">
				{!currentUser && !friendRequest[id] && (
					<Button variant="contained" onClick={handleClick}>
						Add Friend
					</Button>
				)}
			</div>

			{!currentUser && friendRequest[id] && (
				<div className="popup-button">Requested!</div>
			)}

			{currentUser && (
				<Switch
					checked={props.isDarkTheme}
					onChange={props.onChange}
					inputProps={{ "aria-label": "controlled" }}
				/>
			)}
		</div>
	);
}

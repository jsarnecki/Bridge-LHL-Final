import classNames from "classnames";
import "./styles/MessagesListItem.scss";
import { useState } from "react";
export default function MessagesListItem(props) {
	const { message, current_user, friend_first_name } = props;
	const [hover, setHover] = useState(false);

	const handleMouseOver = e => {
		setHover(true);
	};

	const handleMouseOut = e => {
		setHover(false);
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

			<p class="message-text">{message.text}</p>

			{hover && !current_user && !message.edit && (
				<i class="fa-solid fa-pen-to-square"></i>
			)}
		</li>
	);
}

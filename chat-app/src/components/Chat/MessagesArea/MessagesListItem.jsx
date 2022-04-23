import classNames from "classnames";
import "./styles/MessagesListItem.scss";
export default function MessagesListItem(props) {
	const { message, current_user, friend_first_name } = props;
	return (
		<li
			className={classNames("messages-list-item", {
				current_user,
				initializer: message.initializer,
			})}
		>
			{!current_user && (
				<img
					class="profile-picture"
					src={`/seed_assets/${friend_first_name}.png`}
				></img>
			)}

			<p class="message-text">{message.text}</p>
		</li>
	);
}

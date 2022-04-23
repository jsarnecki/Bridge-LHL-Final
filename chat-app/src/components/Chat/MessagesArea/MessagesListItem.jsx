import classNames from "classnames";
import "./styles/MessagesListItem.scss";
export default function MessagesListItem(props) {
	const { message, current_user } = props;
	return (
		<li
			className={classNames("messages-list-item", {
				current_user,
				initializer: message.initializer,
			})}
		>
			{message.text}
		</li>
	);
}

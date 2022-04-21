import classNames from "classnames";
import "./MessagesListItem.scss";
export default function MessagesListItem(props) {
	const { sender, message, current_user } = props;
	return (
		<li className={classNames("messages-list-item", { current_user })}>
			{message.text}
		</li>
	);
}

import "./styles/EditingForm.scss";
export default function EditingForm(props) {
	const { oldText } = props;

	return (
		<div className="editing-form">
			{/* <p className="previous-text">{props.oldText}</p> */}
			<textarea className="new-text" value={oldText}></textarea>
			<i class="fa-solid fa-circle-check"></i>
			<i class="fa-solid fa-circle-xmark"></i>
		</div>
	);
}

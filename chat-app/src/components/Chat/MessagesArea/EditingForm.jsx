import "./styles/EditingForm.scss";
export default function EditingForm(props) {
	const { oldText, handleClose } = props;

	return (
		<div className="editing-form">
			{/* <p className="previous-text">{props.oldText}</p> */}
			<textarea className="new-text" value={oldText}></textarea>
			<div className="editing-form-buttons">
				<i class="fa-solid fa-circle-check fa-stack edit-accept-button"></i>
				<i
					class="fa-solid fa-circle-xmark fa-stack edit-cancel-button"
					onClick={handleClose}
				></i>
			</div>
		</div>
	);
}

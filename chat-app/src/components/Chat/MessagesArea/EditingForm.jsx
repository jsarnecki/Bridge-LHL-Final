import "./styles/EditingForm.scss";
import { useState } from "react";
import useMeasure from "react-use-measure";

export default function EditingForm(props) {
	const { oldText, handleClose } = props;

	const [newText, setNewText] = useState(oldText);
	const [ref, bounds] = useMeasure();

	const handleChange = e => {
		setNewText(e.target.value);
	};

	const width = bounds.width;
	let inputHeight;

	inputHeight = Math.max(1, Math.ceil(newText.length / width / 0.141));

	return (
		<div className="editing-form">
			<textarea
				className="new-text"
				value={newText}
				style={{ height: inputHeight * 20 }}
				onChange={handleChange}
				ref={ref}
			></textarea>
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

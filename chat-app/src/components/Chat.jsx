import { ActionCable } from "react-actioncable-provider";
import { useState, useEffect } from "react";

export default function Chat() {
	const [state, setState] = useState({ rooms: [] });
	useEffect(() => {
		fetch(`http://localhost:3000/rooms`)
			.then(res => res.json())
			.then(roomsArr =>
				setState({
					rooms: roomsArr,
				})
			);
	}, []);

	const handleReceivedRoom = response => {
		console.log(response);
		setState({
			rooms: [...state.rooms, response.room],
		});
	};
	// console.log("hello state.rooms", state.rooms);
	return (
		<main style={{ padding: "1rem 0" }}>
			<h2>Chat</h2>
			<ActionCable
				channel={{ channel: "RoomsChannel" }}
				onReceived={handleReceivedRoom}
			/>
		</main>
	);
}

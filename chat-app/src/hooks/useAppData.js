import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData(initial) {
	const [friendRequest, setFriendRequest] = useState({});

	//Will we need this state? Maybe later with stretch
	const [users, setUsers] = useState({
		users: [
		],
	});

	useEffect(() => {
		const urlUsers = "http://localhost:3000/users";

		//We may be setting state somewhere in here
		axios
			.get(urlUsers)
			.then(response => {
				console.log("Axios response:", response.data);
				// setState(prev => ({...prev, users: response.data}))
				setUsers({ users: response.data });
				const friendRequestState = {};
				response.data.forEach(user => {
					friendRequestState[user.user.id] = false;
				});
				setFriendRequest(friendRequestState);
			})
			.catch(err => console.log("catch error:", err));
	}, []);

	//  function updateBio(userId, bio) {
	//    // setUsers for user with updated bio
	//    return axios.put(`http://localhost:3000/users/${userId}`, {

	//   })
	//     .then(() => { setState([])
	//  }

	return { users, friendRequest, setFriendRequest };
}

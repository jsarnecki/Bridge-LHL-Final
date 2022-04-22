import logo from "./logo.svg";
import "./App.css";
import { ActionCable } from "react-actioncable-provider";
import { useState, useEffect } from "react";
import { Link, Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import { ActionCableProvider } from "react-actioncable-provider";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Login2 from "./components/Login2";
import axios from "axios";
import Login3 from "./components/Login3";
import DropDownLogin from "./components/DropDownLogin";
import ProfilePopup from "./components/Profiles/ProfilePopup";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { createTheme, ThemeProvider } from "@mui/material/styles";



import useApplicationData from './hooks/useAppData';
// import userInformation from "./components/Profiles/helpers/sample_users";

// // Define theme settings
// const light = {
//   palette: {
//     mode: "light",
//   },
// };

// const dark = {
//   palette: {
//     mode: "dark",
//   },
// };

function App(props) {
	const { cableApp } = props;

	const [state, setState] = useState({
		isLoggedIn: false,
		user: {id: 1}, // Figure this out later
	});

	const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

	const [toggle, setToggle] = useState({
		checked: true,
		bgColor: "white"});

  const handleChange = (event) => {

		if (toggle.bgColor === "white") {
			setToggle({
				checked: true,
				bgColor: "#2e2d2d"
			});
		} else {
			setToggle({
				checked: false,
				bgColor: "white"
			});
		}

  };

	const { users } = useApplicationData();
	const userInformation = users.users;

	const targetUser = userInformation.find(
    (u) => state.user.id === u.user.id
  ); // This is used in Profiles, create helper to make DRY
  const targetLanguages = targetUser?.languages || [];
	console.log("targetLanguages, ", targetLanguages)


	

	return (
		<div>
			<nav className="nav"> 
				<Button variant="contained" href="/profiles">Profiles</Button>
				<Button
          variant="contained"
          onClick={handleOpen}
        >Current User</Button>
				<Button variant="contained" href="/chat">Chat</Button>
				<DropDownLogin className="drop-down-main" state={state} setState={setState} userInformation={userInformation} />

				<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ProfilePopup
					key={state.user.id} 
					currentUser={true}
					id={state.user.id}
					firstName={state.user.firstName}
					lastName={state.user.lastName}
					image={state.user.image}
					bio={state.user.bio}
					languages={targetLanguages}
					toggle={toggle}
					setToggle={setToggle}
					handleChange={handleChange}
        />
      </Modal>



			</nav>

			<Outlet
				context={{
					logged_in_user: state.user,
					isLoggedIn: state.isLoggedIn,
					cableApp,
				}}
			/>
		</div>
	);
}

export default App;

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

import useApplicationData from './hooks/useAppData';
// import userInformation from "./components/Profiles/helpers/sample_users";


function App(props) {
	const { cableApp } = props;

	const [state, setState] = useState({
		isLoggedIn: false,
		user: {id: 1}, // Figure this out later
	});

	const { users } = useApplicationData();
	const userInformation = users.users;

	


	// map thru userInfo to create dropDownArr
	// dropDownArr = all the users <MenuItems>
	// bring in state - setState on handleChange
	// value === current loggedin user
	// (Stretch) add imgs next to names in list
	//


	return (
		<div className="App">
			<nav>
				<Link to="/profiles">Profiles</Link>
				<DropDownLogin state={state} setState={setState} userInformation={userInformation} />
				<Link to="/chat">Chat</Link>
				{/* {/* <Login handleLogin={handleLogin} />
				<Login2 handleLogin={handleLogin} />
				<Login3 handleLogin={handleLogin} /> */} 





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

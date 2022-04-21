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

import useApplicationData from './hooks/useAppData';
// import userInformation from "./components/Profiles/helpers/sample_users";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function App(props) {
	const { cableApp } = props;

	const [state, setState] = useState({
		isLoggedIn: false,
		user: {id: 1}, // Figure this out later
	});

	const { users } = useApplicationData();

	const userInformation = users.users;

	
	const handleLogin = data => {
		setState(prev => {
			return {
				...prev,
				isLoggedIn: true,
				user: data.user,
			};
		});
	};
	
	const handleLogout = data => {
		setState(prev => {
			return {
				...prev,
				isLoggedIn: false,
				user: {},
			};
		});
	};

	const loginStatus = () => {
		axios
			.get("http://localhost:3000/logged_in", {
				withCredentials: true,
			})
			.then(response => {
				if (response.data.logged_in) {
					handleLogin(response.data);
				} else {
					handleLogout();
				}
			})
			.catch(error => console.log("api errors:", error));
		};
		
		useEffect(() => {
			loginStatus();
		}, []);
		
		const handleChange = event => {
			axios
				.post(
					"http://localhost:3000/login",
					{
						user: {
							email: `admin${event.target.value}@admin.com`,
							password: "123456",
						},
					},
					{ withCredentials: true }
				)
				.then(response => {
					console.log("response", response);
					if (response.data.logged_in) {
						handleLogin(response.data);
						window.location.reload(false);
					} else {
						alert("error logging in");
					}
				})
				.catch(error => console.log("api errors:", error));
		};


		const dropDownArray = userInformation.map((information)=>{
			return <MenuItem key={information.user.id} value={information.user.id}>{information.user.first_name}</MenuItem>
	});


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
				<Link to="/chat">Chat</Link>
				<Login handleLogin={handleLogin} />
				<Login2 handleLogin={handleLogin} />
				<Login3 handleLogin={handleLogin} />
				{/* <DropDownLogin /> */}


				<Box sx={{ maxWidth: 170 }}>
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">Logged In User</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={state.user.id}
							label="Language"
							onChange={handleChange}
						>
							{dropDownArray}
						</Select>
					</FormControl>
				</Box>



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

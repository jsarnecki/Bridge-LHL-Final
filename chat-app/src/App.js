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

function App() {
	const [state, setState] = useState({
		isLoggedIn: false,
		user: {},
	});
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

	return (
		<div className="App">
			<nav>
				<Link to="/profiles">Profiles</Link>
				<Link to="/chat">Chat</Link>
				<Login handleLogin={handleLogin} />
				<Login2 handleLogin={handleLogin} />
				<Login3 handleLogin={handleLogin} />
			</nav>

			<Outlet
				context={{ logged_in_user: state.user, isLoggedIn: state.isLoggedIn }}
			/>
		</div>
	);
}

export default App;

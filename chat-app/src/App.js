import logo from "./logo.svg";
import "./App.css";
import { ActionCable } from "react-actioncable-provider";
import { useState, useEffect } from "react";
import { Link, Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import { ActionCableProvider } from "react-actioncable-provider";
import ConversationsList from "./components/ConversationsList";
import Login from "./components/Login";
import Login2 from "./components/Login2";
import axios from "axios";

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
					handleLogin(response);
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
				{/* <Link to="/login">Log In</Link> */}
				{/* <Link to="/logout">Log Out</Link> */}
				<Login handleLogin={handleLogin} />
				<Login2 handleLogin={handleLogin} />
			</nav>
			<ConversationsList />
		</div>
	);
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { ActionCable } from "react-actioncable-provider";
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { ActionCableProvider } from "react-actioncable-provider";
import ConversationsList from "./components/ConversationsList";

function App() {
	return (
		<div className="App">
			<nav>
				<Link to="/profiles">Profiles</Link>
				<Link to="/chat">Chat</Link>
				<ConversationsList />
			</nav>
		</div>
	);
}

export default App;

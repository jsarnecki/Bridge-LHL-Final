import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profiles from "./components/Profiles";
import Login from "./components/Login";
import Chat from "./components/Chat";
import actionCable from "actioncable";

const CableApp = {};
CableApp.cable = actionCable.createConsumer("ws://localhost:3000/cable");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App cableApp={CableApp} />}>
				<Route path="chat" element={<Chat />} />
				<Route path="profiles" element={<Profiles />} />
			</Route>
			<Route path="/login" element={<Login />} />
			<Route path="/logout" />
		</Routes>
	</BrowserRouter>
);

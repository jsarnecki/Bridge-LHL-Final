import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Profiles from "./components/Profiles";
import { ActionCableProvider } from "react-actioncable-provider";
import { API_WS_ROOT } from "./constants";
import Login from "./components/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ActionCableProvider url={API_WS_ROOT}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="profiles" element={<Profiles />} />
					<Route path="chat" element={<Chat />} />
					<Route path="/login" element={<Login />} />
					<Route path="/logout" />
				</Routes>
			</BrowserRouter>
		</ActionCableProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

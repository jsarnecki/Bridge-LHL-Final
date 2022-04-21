import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDownLogin(props) {




	const handleLogin = data => {
		props.setState(prev => {
			return {
				...prev,
				isLoggedIn: true,
				user: data.user,
			};
		});
	};
	
	const handleLogout = data => {
		props.setState(prev => {
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


		const dropDownArray = props.userInformation.map((information)=>{
			return <MenuItem key={information.user.id} value={information.user.id}>
        <img src={information.user.image} style={
          {"max-height" : "1.5em", "border-radius" : "35%", "margin" : "-5px, 10px"}
          }
        />
        {information.user.first_name}

        </MenuItem>
	});



  return (
    <Box sx={{ maxWidth: 170, height: 45 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Logged In User</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.state.user.id}
          label="Language"
          onChange={handleChange}
        >
          {dropDownArray}
        </Select>
      </FormControl>
    </Box>
  );
}

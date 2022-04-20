import userInformation from "./Profiles/helpers/sample_users";
import Profile from "./Profiles/Profile";
import "./Profiles.scss";

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useState } from "react";
import Example from "./Profiles/ProfilePopup";

import { useOutletContext } from "react-router-dom";

export default function Profiles() {
	const [languageId, setLanguageId] = useState(0);

  const handleChange = (event) => {
    setLanguageId(event.target.value);
  };
	
  // State will keep track of which profiles to render, based on user logged in
  // We can use useOuletContext hook to obtain logged in users id
  // hardcoding users_languages
  // Filter toggle button

  const { logged_in_user } = useOutletContext();

  // // Save the learning: true languages into array for the current_user --> language id
  // // Go thru usersMapped, filtering the "learning: false" matching current_users true learning languages
  // // Render these filteredUsers for this current user

  const loggedInId = logged_in_user.id || 1;
  console.log("loggedInId", loggedInId);

  const targetLanguages = userInformation.find(
    (u) => loggedInId === u.user.id
  ).languages;
  // convert a list of language objects, into list of language_ids
  const learningLanguages = targetLanguages.filter(
    (language) => language.learning === true
  );
  const learningLanguagesIds = learningLanguages.map(
    (language) => language.language_id
  );

  const usersMapped = userInformation.map((information) => {
    // Drop down which holds learning languages of current user
    // Default is to load all users
    // When filtered/choose language: add condition in mapped users to only grab users that are native
    // ex. All, Japanese, Hindi

		

    let offeredLanguages = [];
    for (const language of information.languages) {
      if (language.learning === false) {
        offeredLanguages.push(language.language_id);
      }
    }

    console.log("languages", offeredLanguages);
    let match = false;

    for (let lang of offeredLanguages) {
      if (learningLanguagesIds.includes(lang)) {
        match = true;
      }
    }

    console.log("match", match, "languages", offeredLanguages);
    console.log("learnLangId", learningLanguagesIds);

    if (match) {
      return (
        <Profile
          key={information.user.id}
          id={information.user.id}
          firstName={information.user.first_name}
          lastName={information.user.last_name}
          image={information.user.image}
          bio={information.user.bio}
          languages={information.languages}
        />
      );
    }
  });

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Profiles</h2>
			<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={languageId}
          label="Language"
          onChange={handleChange}
        >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={1}>English</MenuItem>
          <MenuItem value={2}>Korean</MenuItem>
					<MenuItem value={3}>Japanese</MenuItem>
          <MenuItem value={4}>Chinese</MenuItem>
					<MenuItem value={5}>French</MenuItem>
          <MenuItem value={6}>Spanish</MenuItem>
					<MenuItem value={7}>German</MenuItem>
					<MenuItem value={8}>Hindi</MenuItem>
        </Select>
      </FormControl>
    </Box>
      <ul className="cards">{usersMapped}</ul>
    </main>
  );
}

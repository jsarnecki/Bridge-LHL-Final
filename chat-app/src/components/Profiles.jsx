import * as React from 'react';

import Profile from "./Profiles/Profile";
import "./Profiles.scss";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useState } from "react";
import Example from "./Profiles/ProfilePopup";

import { useOutletContext } from "react-router-dom";
// import userInformation from "./Profiles/helpers/sample_users";

import useApplicationData from '../hooks/useAppData';
import DropDownFilter from './DropDownFilter';

export default function Profiles() {
	const [languageId, setLanguageId] = useState(0);

  const handleChange = (event) => {
    setLanguageId(event.target.value);
  };

  const { state } = useApplicationData();

  console.log("state.users:", state.users);

  const { logged_in_user } = useOutletContext();

  const userInformation = state.users;

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
    
    let offeredLanguages = [];
    for (const language of information.languages) {
      // Create array of native languages per mapped user
      if (language.learning === false) {
        offeredLanguages.push(language.language_id);
      }
    }

    let match = false;

    if (languageId === 0) {
      // If langId is 0 search all users
      for (let lang of offeredLanguages) {
        if (learningLanguagesIds.includes(lang)) {
          // If mapped user is native to currentUser's learning language, add profile
          match = true;
        }
      }
    } else {
      // If any other langId than 0, only filter based on native speakers of that language
      for (let lang of offeredLanguages) {
        if (languageId === lang) {
          match = true;
        }
      }
    }

    //&& learningLanguagesIds.includes(lang)


    console.log("match", match, "languages", offeredLanguages);
    // console.log("learnLangId", learningLanguagesIds);

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
		<DropDownFilter 
      languageId={languageId} 
      learningLanguages={learningLanguages} 
      learningLanguagesIds={learningLanguagesIds} 
      handleChange={handleChange}
    />
      <ul className="cards">{usersMapped}</ul>
    </main>
  );
}

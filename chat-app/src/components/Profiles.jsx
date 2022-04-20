import userInformation from "./Profiles/helpers/sample_users";
import Profile from "./Profiles/Profile";
import "./Profiles.scss";

import { useState } from "react";
import Example from "./Profiles/ProfilePopup";


import { useOutletContext } from "react-router-dom";

export default function Profiles() {
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

	const targetLanguages = userInformation.find(u => loggedInId === u.user.id).languages;
	// convert a list of language objects, into list of language_ids
	const learningLanguages = targetLanguages.filter((language) => language.learning === true);
	const learningLanguagesIds = learningLanguages.map((language) => language.language_id);
	

	const usersMapped = userInformation.map((information)=> {
	// save arr languages
	// loop thru arr, push into new arr if learning == false
	// comparing the ids to the learnignLanguagesIds
	// if true, then render Profile
	
	let offeredLanguages = [];
	for (const language of information.languages) {
		if (language.learning === false) {
			offeredLanguages.push(language.language_id);
		}
	}
	
	console.log("languages", offeredLanguages)
	let match = false;

	for (let lang of offeredLanguages) {
		if (learningLanguagesIds.includes(lang)){
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
				)
		}

	});
  


  return (
    <main style={{ padding: "1rem 0" }}>
			<>
				<Example />
      </>
      <h2>Profiles</h2>
      <ul className="cards" >{usersMapped}</ul>

    </main>
  );
}

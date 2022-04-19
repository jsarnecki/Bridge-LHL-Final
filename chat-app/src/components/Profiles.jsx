import userInformation from "./Profiles/helpers/sample_users";
import Profile from "./Profiles/Profile";
import "./Profiles.scss";

import { useOutlet, useOutletContext } from "react-router-dom";

export default function Profiles() {
  // State will keep track of which profiles to render, based on user logged in
  // We can use useOuletContext hook to obtain logged in users id
  // hardcoding users_languages
	//Filter toggle button

	const { logged_in_user } = useOutletContext();
	console.log("logged in user", logged_in_user)
	
	// Save the learning: true languages into array for the current_user --> language id
	// Go thru usersMapped, filtering the "learning: false" matching current_users true learning languages
	// Render these filteredUsers for this current user 

	const loggedInId = logged_in_user.id;
	console.log("loggedInId", loggedInId);

	

	const targetLanguages = userInformation.find(u => loggedInId === u.user.id).languages;

	
	console.log("target lang:", targetLanguages);

	// convert a list of language objects, into list of language_ids

	const learningLanguages = targetLanguages.filter((language) => language.learning === true);

	// console.log("learningLanguages", learningLanguages);

	const learningLanguagesIds = learningLanguages.map((language) => language.language_id);

	console.log("learningLanguagesIds", learningLanguagesIds);
	

	const usersMapped = userInformation.map((information)=> {
	


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
	})


  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Profiles</h2>
      <ul className="cards" >{usersMapped}</ul>
    </main>
  );
}

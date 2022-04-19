import userInformation from "./Profiles/helpers/sample_users"
import Profile from "./Profiles/Profile"



export default function Profiles() {
  // State will keep track of which profiles to render, based on user logged in
  // We can use useOuletContext hook to obtain logged in users id
  // hardcoding users_languages

	console.log("userInformation", userInformation);

	const usersMapped = userInformation.map((information)=> {
		return (
			<Profile
			key={information.user.id}
			id={information.user.id}
			firstName={information.user.first_name}
			lastName={information.user.lastName}
			image={information.user.image}
			bio={information.user.bio}
			languages={information.languages}			
			/>
		)
	})




  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Profiles</h2>
      <ul>{usersMapped}</ul>
    </main>
  );
}

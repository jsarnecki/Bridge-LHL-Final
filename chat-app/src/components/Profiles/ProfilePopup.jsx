import "./ProfilePopup.scss";
import Button from "@mui/material/Button";
import { useState } from "react";
import Switch from '@mui/material/Switch';

export default function ProfilePopup(props) {
  // const [checked, setChecked] = useState(true);

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };

  const currentUser = props.currentUser; //Flag for enabling editing 
  // Add darkmode toggle?


  const languages = props.languages.map((lang) => {
    const stars = function (level) {
      let star = "⭐";
      return star.repeat(level);
    };

    let skillLevel = stars(lang.skill_level);

    return (
      <div>
        <li>
          {lang.learning ? "Learning: " : "Native: "}
          {lang.language_name}
        </li>
        <li>{skillLevel}</li>
      </div>
    );
  });

  return (
    <div style={{"background-color" : props.checked ? "#2e2d2d" : "white"}} className="popup-box">
      
      <div id="modal-modal-title" variant="h6" component="h2">
        {props.firstName} {props.lastName}
      </div>

      <div className="popup-top">
        <img className="popup-img" src={props.image} />
        <ul>{languages}</ul>
      </div>

      <div id="modal-modal-description" sx={{ mt: 2 }}>
        {props.bio}
      </div>
      <div className="popup-button">
        
        {!currentUser && <Button
          variant="contained"
          onClick={() => {
            console.log("Messaging button clicked!");
          }}
        >
          Add Friend
        </Button>}
      </div>


      <Switch
      checked={props.isDarkTheme}
      onChange={props.onChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />



    </div>
  );
}

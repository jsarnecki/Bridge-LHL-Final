import "./ProfilePopup.scss";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function ProfilePopup(props) {

  const languages = props.languages.map(lang => {
     
    const stars = function(level) {
      let star = "⭐";
      return star.repeat(level);
    }

    let skillLevel = stars(lang.skill_level)

    return (
      <div>
        <li>{lang.learning ? "Learning: " : "Native: "}{lang.language_name}</li>
        <li>{skillLevel}</li>
      </div>
    )
  });

  return (
    <div className="popup-box" >
      <div id="modal-modal-title" variant="h6" component="h2">
        {props.firstName} {props.lastName}
      </div>
      <img className="popup-img" src={props.image} />
      <ul>{languages}</ul>
      <div id="modal-modal-description" sx={{ mt: 2 }}>
        {props.bio}
      </div>
    </div>
  );
}

import "./ProfilePopup.scss";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function ProfilePopup(props) {
  return (
    <div className="popup-box" >
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Here is the first name: {props.firstName}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography>
    </div>
  );
}

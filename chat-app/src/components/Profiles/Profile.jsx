import "./Profile.scss";
//change Button to MUI component later- before meeting
// import Button from 'react-bootstrap/Button';
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";
import ProfilePopup from "./ProfilePopup";



const style = {
  position: 'absolute',
  height: '70vh',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Profile(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="mdc-card mdc-card--outlined">
      <div>
        <span>{props.firstName}</span> <span>{props.lastName}</span>
      </div>
      <div className="my-card__media">
        <img className="profile-img" src={props.image} />
      </div>
      <div>{props.bio}</div>
      <div>{props.langauages}</div>
      {/* <button className="mdc-button mdc-card__action mdc-card__action--button ">
        <span className="mdc-button__label">Action 1</span>
      </button> */}
      <div> ______________________</div>
      <Button
        variant="contained"
        onClick={() => {
          console.log("Messaging button clicked!");
        }}
      >
        Message
      </Button>
      <div> ______________________</div>
      <Button onClick={handleOpen}>Expand Profile</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ProfilePopup firstName={props.firstName} />
        </Box>
      </Modal>
    </div>
  );
}

import "./Profile.scss";
//change Button to MUI component later- before meeting
// import Button from 'react-bootstrap/Button';
import Button from '@mui/material/Button';


export default function Profile(props) {
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
      <Button variant="contained" onClick={()=>{console.log("Profile button clicked!")}}>Expand Profile</Button>
      <div> ______________________</div>
      <Button variant="contained" onClick={()=>{console.log("Messaging button clicked!")}}>Message</Button>
    </div>
  );
}

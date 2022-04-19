import "./Profile.scss";

export default function Profile(props) {
  return (
    <div class="mdc-card mdc-card--outlined">
      <div>
        <span>{props.firstName}</span> <span>{props.lastName}</span>
      </div>
      <div class="my-card__media">
        <img class="profile-img" src={props.image} />
      </div>
      <div>{props.bio}</div>
      <div>{props.langauages}</div>
      <button class="mdc-button mdc-card__action mdc-card__action--button ">
        <span class="mdc-button__label">Action 1</span>
      </button>
    </div>
  );
}

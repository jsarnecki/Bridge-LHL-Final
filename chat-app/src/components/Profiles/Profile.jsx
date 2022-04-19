
export default function Profile(props) {
  
  return(
    <div>
      <li>{props.firstName}</li>
      <li>{props.lastName}</li>
      <img src={props.image} />
      <li>{props.bio}</li>
      <ul>{props.langauages}</ul>
    </div>
  )
}




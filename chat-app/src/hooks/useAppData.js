import { useState, useEffect } from "react";
import axios from "axios";


export default function useApplicationData(initial) {
  //Will we need this state? Maybe later with stretch
  const [state, setState] = useState({
    users: []
  });
  
  
  useEffect(() => {
    const urlUsers = "http://localhost:3000/users";

    //We may be setting state somewhere in here
    axios.get(urlUsers)
    .then((response)=>{
      console.log("Axios response:", response.data);
      setState(prev => ({...prev, users: response.data}))
    })
  }, []);

  
  return { state }
}
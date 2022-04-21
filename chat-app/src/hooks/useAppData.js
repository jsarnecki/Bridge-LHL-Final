import { useState, useEffect } from "react";
import axios from "axios";


export default function useApplicationData(initial) {
  //Will we need this state? Maybe later with stretch
  const [users, setUsers] = useState({
    users: [{
      user: {
        id: 1,
        email: "admin@admin.com",
        password_digest:
          "$2a$12$KMXbAzCNqcLCMrMWXSHy6uoNDEPfdns1EabjKL1tNAEV/CjFJUnga",
        first_name: "Yuki",
        last_name: "Fujiwara",
        image: '/seed_assets/yuki.png',
        bio: "Hi, I am Yuki, I am half Japanese and half Indian. My other first name is Sathvik!",
        created_at: "2022-04-19T15:48:40.165Z",
        updated_at: "2022-04-19T15:48:40.165Z",
      },
      languages: [
        {
          id: 1,
          user_id: 1,
          language_id: 1,
          language_name: "English",
          skill_level: 5,
          learning: false,
        },
        {
          id: 2,
          user_id: 1,
          language_id: 3,
          language_name: "Japanese",
          skill_level: 3,
          learning: true,
        },
        {
          id: 3,
          user_id: 1,
          language_id: 8,
          language_name: "Hindi",
          skill_level: 3,
          learning: true,
        },
      ],
    }]
  });
  
  
  useEffect(() => {
    const urlUsers = "http://localhost:3000/users";

    //We may be setting state somewhere in here
    axios.get(urlUsers)
    .then((response)=>{
      console.log("Axios response:", response.data);
      // setState(prev => ({...prev, users: response.data}))
      setUsers({users: response.data})
    })
    .catch(err => console.log("catch error:", err));
  }, []);

  
  return { users }
}
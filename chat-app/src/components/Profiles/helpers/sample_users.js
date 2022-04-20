
import andy from './seed_assets/andy.png';
import yuki from './seed_assets/yuki.png';
import josh from './seed_assets/josh.png';
import tony from './seed_assets/tony.png';


const userInformation = [
  {
    user: {
      id: 1,
      email: "admin@admin.com",
      password_digest:
        "$2a$12$KMXbAzCNqcLCMrMWXSHy6uoNDEPfdns1EabjKL1tNAEV/CjFJUnga",
      first_name: "Yuki",
      last_name: "Fujiwara",
      image: yuki,
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
  },
  {
    user: {
      id: 2,
      email: "admin2@admin.com",
      password_digest:
        "$2a$12$KMQ63heL0R3QfgmS5.Ht8.HMKiwwjJmO9qI7Wv4Gd8PfmXod.R1EC",
      first_name: "Josh",
      last_name: "Sarnecki",
      image: josh,
      bio: "Hi, I am Josh! I like snowboarding and learning Korean!",
      created_at: "2022-04-19T15:48:40.513Z",
      updated_at: "2022-04-19T15:48:40.513Z",
    },
    languages: [
      {
        id: 4,
        user_id: 2,
        language_id: 1,
        language_name: "English",
        skill_level: 5,
        learning: false,
      },
      {
        id: 5,
        user_id: 2,
        language_id: 2,
        language_name: "Korean",
        skill_level: 3,
        learning: true,
      },
    ],
  },
  {
    user: {
      id: 3,
      email: "admin3@admin.com",
      password_digest:
        "$2a$12$iHvs4YiatZZDKAHfi91CS.HsGQv/gq5Z6GJ7ydx4KkEgShVXrI.6y",
      first_name: "Tony",
      last_name: "Fu",
      image: tony,
      bio: "Hi, I'm another test!",
      created_at: "2022-04-19T15:48:40.854Z",
      updated_at: "2022-04-19T15:48:40.854Z",
    },
    languages: [
      {
        id: 6,
        user_id: 3,
        language_id: 1,
        language_name: "English",
        skill_level: 5,
        learning: false,
      },
      {
        id: 7,
        user_id: 3,
        language_id: 4,
        language_name: "Chinese",
        skill_level: 5,
        learning: false,
      },
      {
        id: 8,
        user_id: 3,
        language_id: 5,
        language_name: "French",
        skill_level: 1,
        learning: true,
      },
    ],
  },
  {
    user: {
      id: 4,
      email: "admin3@admin.com",
      password_digest:
        "$2a$12$iHvs4YiatZZDKAHfi91CS.HsGQv/gq5Z6GJ7ydx4KkEgShVXrI.6y",
      first_name: "Tony",
      last_name: "Fu",
      image: tony,
      bio: "Hi, I am Tony and I have lived on 3 continents!",
      created_at: "2022-04-19T15:48:40.854Z",
      updated_at: "2022-04-19T15:48:40.854Z",
    },
    languages: [
      {
        id: 9,
        user_id: 4,
        language_id: 1,
        language_name: "English",
        skill_level: 5,
        learning: false,
      },
      {
        id: 10,
        user_id: 4,
        language_id: 4,
        language_name: "Chinese",
        skill_level: 5,
        learning: false,
      },
      {
        id: 11,
        user_id: 4,
        language_id: 5,
        language_name: "French",
        skill_level: 1,
        learning: true,
      },
    ],
  }
  ,
  {
    user: {
      id: 89,
      email: "admin3@admin.com",
      password_digest:
        "$2a$12$iHvs4YiatZZDKAHfi91CS.HsGQv/gq5Z6GJ7ydx4KkEgShVXrI.6y",
      first_name: "Tony",
      last_name: "Fu",
      image: tony,
      bio: "Hi, I can teach Hindi!",
      created_at: "2022-04-19T15:48:40.854Z",
      updated_at: "2022-04-19T15:48:40.854Z",
    },
    languages: [
      {
        id: 12,
        user_id: 5,
        language_id: 1,
        language_name: "English",
        skill_level: 5,
        learning: true,
      },
      {
        id: 13,
        user_id: 5,
        language_id: 8,
        language_name: "Hindi",
        skill_level: 5,
        learning: false,
      },
      {
        id: 14,
        user_id: 5,
        language_id: 5,
        language_name: "French",
        skill_level: 1,
        learning: false,
      },
    ],
  }, 
  {
    user: {
      id: 55,
      email: "admin3@admin.com",
      password_digest:
        "$2a$12$iHvs4YiatZZDKAHfi91CS.HsGQv/gq5Z6GJ7ydx4KkEgShVXrI.6y",
      first_name: "Tony K",
      last_name: "Fu ",
      image: tony,
      bio: "Hi, I can teach Korean!",
      created_at: "2022-04-19T15:48:40.854Z",
      updated_at: "2022-04-19T15:48:40.854Z",
    },
    languages: [
      {
        id: 15,
        user_id: 5,
        language_id: 1,
        language_name: "English",
        skill_level: 5,
        learning: false,
      },
      {
        id: 16,
        user_id: 5,
        language_id: 2,
        language_name: "Korean",
        skill_level: 5,
        learning: false,
      },
      {
        id: 17,
        user_id: 5,
        language_id: 5,
        language_name: "French",
        skill_level: 1,
        learning: false,
      },
    ],
  },
  {
    user: {
      id: 6,
      email: "admin3@admin.com",
      password_digest:
        "$2a$12$iHvs4YiatZZDKAHfi91CS.HsGQv/gq5Z6GJ7ydx4KkEgShVXrI.6y",
      first_name: "Andy",
      last_name: "The Goat",
      image: andy,
      bio: "Hi, I can also teach Korean! I'm the GOAT",
      created_at: "2022-04-19T15:48:40.854Z",
      updated_at: "2022-04-19T15:48:40.854Z",
    },
    languages: [
      {
        id: 16,
        user_id: 6,
        language_id: 1,
        language_name: "English",
        skill_level: 5,
        learning: false,
      },
      {
        id: 17,
        user_id: 6,
        language_id: 2,
        language_name: "Korean",
        skill_level: 5,
        learning: false,
      },
      {
        id: 18,
        user_id: 5,
        language_id: 6,
        language_name: "French",
        skill_level: 1,
        learning: false,
      },
    ],
  },
  {
    user: {
      id: 7,
      email: "admin3@admin.com",
      password_digest:
        "$2a$12$iHvs4YiatZZDKAHfi91CS.HsGQv/gq5Z6GJ7ydx4KkEgShVXrI.6y",
      first_name: "Andy J",
      last_name: "Lindsay",
      image: andy,
      bio: "Hi, I can also teach Japanese! I'm the GOAT",
      created_at: "2022-04-19T15:48:40.854Z",
      updated_at: "2022-04-19T15:48:40.854Z",
    },
    languages: [
      {
        id: 17,
        user_id: 7,
        language_id: 3,
        language_name: "Japanese",
        skill_level: 5,
        learning: false,
      }
    ],
  }
];

export default userInformation;
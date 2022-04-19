const userInformation = [
  {
    user: {
      id: 1,
      email: "admin@admin.com",
      password_digest:
        "$2a$12$KMXbAzCNqcLCMrMWXSHy6uoNDEPfdns1EabjKL1tNAEV/CjFJUnga",
      first_name: "Yuki",
      last_name: "Fujiwara",
      image: "#<File:0x000000011203a0a8>",
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
        skill_level: 5,
        learning: false,
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
      image: "#<File:0x000000010c91ae08>",
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
      image: "#<File:0x000000010df1f050>",
      bio: "Hi, I am Tony and I have lived on 3 continents!",
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
];

export default userInformation;
# Bridge

A language exchange app inspired by HelloTalk and Tandem.  With the intention to bridge the connection between cultures through the shared interest in language learning, Bridge makes meeting like-minded native speakers in your target language approachable through an accessible UI.  

## Final Product

!["Home page"](https://github.com/jsarnecki/Bridge-LHL-Final/blob/main/public/bridge-home.png?raw=true)

!["Chat"](https://github.com/jsarnecki/Bridge-LHL-Final/blob/main/public/bridge-chat.png?raw=true)

## Dependancies

- Ruby 3.1.0
- Ruby on Rails 7.0.2
- ActionCable
- Material-UI
- Sass
- Axios
- React Router
- [React ActionCable Provider](https://www.npmjs.com/package/@thrash-industries/react-actioncable-provider)

## Getting Started

- Inside the root directory run `bundle install` using Ruby version 3.1.0.
- Run `rails db:migrate:reset` then run `rails db:reset`.
- Inside of the chat-app directory, `npm install` all dependancies.
- Inside the root directory run `rails s` to start the Rails server.
- Inside of chat-app directory, on a different terminal tab run `npm start` to start the React server.
- The React server should open up the Bridge application on localhost:3001.
- You can choose an account to use on the far right of the nav bar, each account has different language preferences.  
- You can press the profile icon on the nav bar to see the current user's profile.
- You can filter the rendered profiles based on language preference using the 'languages' dropdown menu to the far left.
- Clicking on a profile card you are able to see more details about the user, as well as an 'add friend' button which will send a request to enable the chat feature.
- We suggest opening a separate incognito window and log on using the account you add as a friend.
- Pressing the chat bubble on the nav bar takes you to the chat page.  You are able to see previous conversations with friends, and accept or reject incoming friend requests.  Once you accept, you are able to start messaging each other.  
- The chat has a 'correction' feature, where you are able to correct grammar/vocabulary mistakes your language partner makes, highlighting where the mistake occured.  
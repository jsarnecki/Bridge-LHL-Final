# Bridge

Language exchange application

## Final Product

![""](https://github.com/jsarnecki/scheduler/blob/master/public/scheduler_home.png?raw=true)

![""](https://github.com/jsarnecki/scheduler/blob/master/public/scheduler_add.png?raw=true)

![""](https://github.com/jsarnecki/scheduler/blob/master/public/scheduler_confirm.png?raw=true)

## Dependancies

- Ruby 3.1.0
- Ruby on Rails 7
- ActionCable
- Material-UI
- SCSS
- Axios
- React Router
- [React ActionCable Provider](https://www.npmjs.com/package/@thrash-industries/react-actioncable-provider)
<!-- 
Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ... -->

## Getting Started

- Upon cloning the repository, `bundle install` inside the main directory using Ruby version 3.1.0.
- Run `rails db:migrate:reset` then run `rails db:reset`.
- Inside of the chat-app directory, `npm install` all dependancies.
- Inside the main directory run `rails s` to start the Rails server.
- Inside of chat-app directory run `npm start` to start the React server.
- The React server should redirect you to localhost:3001.
- You can choose an account to use on the far right of the nav bar, each account has different language preferences.  
- You can press the profile icon on the nav bar to see the current user's profile.
- You can filter the profiles based on language preference on the main page by using the 'languages' dropdown menu to the far left.
- Clicking on a profile card you are able to see more details about the user, as well as an 'add friend' button which will enable to chat feature between users.
- We suggest opening a separate incognito window and log on using an account you add as a friend.
- Pressing the chat bubble on the nav bar takes you to the chat page.  You are able to see previous conversations with friends, and accept or reject incoming friend requests.  Once you accept, you are able to start messaging each other.  
- The chat has a 'correction' feature, where you are able to correct grammar/vocab mistakes your language partner makes, highlighting where the mistake occured.  
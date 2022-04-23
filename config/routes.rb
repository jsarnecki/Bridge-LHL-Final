Rails.application.routes.draw do
	resources :conversations, only: %i[index create destroy update]
	resources :messages, only: [:create]

	post 'login', to: 'sessions#create'
	get '/logged_in', to: 'sessions#is_logged_in?'

	resources :users, only: %i[create show index] do
		resources :conversations, only: %i[create index]
		resources :users_languages
	end

	mount ActionCable.server => '/cable'
end

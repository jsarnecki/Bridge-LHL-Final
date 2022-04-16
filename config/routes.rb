Rails.application.routes.draw do
	resources :rooms, only: %i[index create]
	resources :conversations, only: %i[index create]
	resources :messages, only: [:create]

	post 'sign_up', to: 'users#create'
	post 'login', to: 'sessions#create'
	delete 'logout', to: 'sessions#destroy'

	mount ActionCable.server => '/cable'
end

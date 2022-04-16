Rails.application.routes.draw do
	resources :rooms, only: %i[index create]
	resources :conversations, only: %i[index create]
	resources :messages, only: [:create]
	mount ActionCable.server => '/cable'
end

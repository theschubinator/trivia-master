Rails.application.routes.draw do
  namespace :api do
  	resources :users do
  		resources :games
  	end
  	resources :questions
  	resources :categories, only: [:index, :show]
  	resources :sessions, only: [:create]
  end
end

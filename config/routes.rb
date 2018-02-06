Rails.application.routes.draw do
  namespace :api do
  	resources :users
  	resources :questions
  	resources :games
  	resources :categories, only: [:index, :show]
  	resources :sessions, only: [:create]
  end
end

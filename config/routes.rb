Rails.application.routes.draw do
  namespace :api do
  	resources :users
  	resources :questions
  	resources :categories, only: [:index, :show]
  	resources :sessions, only: [:create, :destroy]
  end
end

Rails.application.routes.draw do
  namespace :api do
  	resources :users, only: [:index, :create] do
  		resources :games, only: [:index, :show, :create]
  	end
  	resources :questions, only: [:index, :create, :update, :destroy]
  	resources :sessions, only: [:create]
  end
end

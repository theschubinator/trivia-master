Rails.application.routes.draw do
  namespace :api do
  	resources :users
  	resources :questions
  	resources :categories, only: [:index, :show]
  end
end

Rails.application.routes.draw do
  resources :favorites
  resources :applications
  resources :jobs
  resources :companies
  resources :seekers
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

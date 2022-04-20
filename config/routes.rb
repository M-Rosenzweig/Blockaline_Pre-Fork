Rails.application.routes.draw do
  
  resources :favorites
  resources :applications
  resources :jobs
  resources :companies
  resources :seekers
  resources :sessions, only:[:create, :destroy]
  get "/me", to: "seekers#show"


end

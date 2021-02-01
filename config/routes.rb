Rails.application.routes.draw do
  # devise_for :models
  resources :users
  namespace :v1, defaults: {formate: 'json'} do
  get 'things' ,to: 'things#index'
  get 'test123' ,to: 'test#new'
 end

 get '*page', to: 'static#index', constrainsts: ->(req) do
 !req.xhr? && req.formate.html?
 end
 
 root 'static#index'
end

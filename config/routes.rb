Rails.application.routes.draw do
  resources :users
  namespace :v1, defaults: {formate: 'json'} do
  get 'things' ,to: 'things#index'
 end

 get '*page', to: 'static#index', constrainsts: ->(req) do
 !req.xhr? && req.formate.html?
 end
 
 root 'static#index'
end

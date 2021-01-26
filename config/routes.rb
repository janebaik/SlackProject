Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to:'static_page#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show, :destroy]   #NOTE: think we would need show&index because I want to be able to search users 
    resource :session, only: [:create, :destroy]
  end

end

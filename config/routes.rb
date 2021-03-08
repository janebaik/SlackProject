Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to:'static_page#root'

  namespace :api, defaults: {format: :json} do
  resources :users, only: [:index, :create, :show, :destroy] do   #NOTE: think we would need show&index because I want to be able to search users 
    resources :channels, only: [:index]
  end
  # i think i need to nest it because one user to channel
  # might need update to update the memebrs 

  resources :channels, only: [:index, :create, :show, :destroy, :edit, :update] do
    resources :users, only: [:index]
  end
  
  resources :channelmembers, only:[:create, :show, :destroy]

  resource :session, only: [:create, :destroy]
  end

end

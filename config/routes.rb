Rails.application.routes.draw do
  root 'health#index'

  resources :restaurants do
    member do
      get :delete
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #
  #
end

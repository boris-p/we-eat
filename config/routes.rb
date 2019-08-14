Rails.application.routes.draw do
  root "health#index"

  resources :restaurants do
    member do
      get :delete
    end
  end
end

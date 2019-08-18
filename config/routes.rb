Rails.application.routes.draw do
  root "health#index"

  resources :restaurants do
    member do
      get :delete
    end
    resources :cuisines, :only => [:update, :destroy], :controller => :restaurants_cuisines
  end
  resources :cuisines do
    member do
      get :delete
    end
  end
end

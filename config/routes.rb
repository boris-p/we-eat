# frozen_string_literal: true

Rails.application.routes.draw do
  root 'health#index'

  resources :restaurants do
    resources :cuisines, :only => [:update, :destroy], :controller => :restaurants_cuisines
  end
  resources :cuisines do
  end
end

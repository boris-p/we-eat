# frozen_string_literal: true

class RestaurantsController < ApplicationController
  before_action :set_restaurant, only: %i(show update destroy)

  def index
    json_response(Restaurant.all)
  end

  def show
    json_response(@restaurant)
  end

  def create
    restaurant = Restaurant.create!(restaurant_params)
    json_response(restaurant, :created)
  end

  def update
    @restaurant.update!(restaurant_params)
    head :no_content
  end

  def destroy
    @restaurant.destroy!
    head :no_content
  end

  private

  def set_restaurant
    @restaurant = Restaurant.find(params[:id])
  end

  def restaurant_params
    # whitelist params
    params.permit(:name, :url, :tenbis_id, :rating,
                  :num_of_reviews, :address, :latitude, :longitude,
                  :delivery_time, :phone, :logo_url, :img_url)
  end
end

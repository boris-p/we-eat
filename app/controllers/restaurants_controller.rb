class RestaurantsController < ApplicationController
  before_action :set_restaurant, only: %i[show update destroy]

  def index
    @restaurants = Restaurant.all
    json_response(@restaurants)
  end

  def show
    json_response(@restaurant)
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)
    if @restaurant.save
      json_response({message: 'object created succussfully'}, 201)
    else
      json_response({message: "was not able to save. Error is #{@restaurant.errors.full_messages}"}, 400)
    end
  end

  def update
    @restaurant.update(restaurant_params)
    head :no_content
  end

  def destroy
    @restaurant.destroy
    head :no_content
  end

  private

  def set_restaurant
    @restaurant = Restaurant.find(params[:id])
  end

  def restaurant_params
    # whitelist params
    params.permit(:name, :url, :tenbis_id, :rating, :num_of_reviews, :address, :latitude, :longitude, :delivery_time, :phone, :logo_url, :img_url)
  end
end

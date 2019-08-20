# frozen_string_literal: true

class RestaurantsCuisinesController < ApplicationController
  before_action :set_restaurant_and_cuisine, only: %i(update destroy)

  def update
    @restaurant.cuisines << @cuisine unless @restaurant.cuisines.include?(@cuisine)
  end

  def destroy
    @restaurant.cuisines.destroy(@cuisine)
  end

  private

  def set_restaurant_and_cuisine
    @restaurant = Restaurant.find(params[:restaurant_id])
    @cuisine = Cuisine.find(params[:id])
  end
end

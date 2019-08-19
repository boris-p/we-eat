# frozen_string_literal: true

class RestaurantsCuisinesController < ApplicationController
  before_action :set_restaurant_and_cuisine, only: %i(update destroy)

  def update
    if @restaurant.cuisines.include?(@cuisine)
      head :no_content
    else
      @restaurant.cuisines << @cuisine
      @restaurant.save!
    end
  end

  def destroy
    if @restaurant.cuisines.include?(@cuisine)
      @restaurant.cuisines.delete(@cuisine)
      head :no_content
    else
      json_response({ message: 'was not able to find a cuisine - this should not have happened' }, 404)
    end
  end

  private

  def set_restaurant_and_cuisine
    @restaurant = Restaurant.find(params[:restaurant_id])
    @cuisine = Cuisine.find(params[:id])
  end
end

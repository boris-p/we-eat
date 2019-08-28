# frozen_string_literal: true

class RestaurantsController < ApplicationController
  before_action :set_restaurant, only: %i(show update destroy)

  def index
    # should optimize it to just get the id's of the cuisines and not the entire objects all the time
    # not sure how to cancel activerecord's default behaviour with this one
    res = Restaurant.left_joins(:cuisines)
              .select('restaurants.*, array_agg(cuisines.id) as cuisines')
              .group('restaurants.id')
    json_response(res)
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
    params.permit(:name,
                  :url,
                  :tenbis_id,
                  :rating,
                  :num_of_reviews,
                  :address,
                  :latitude,
                  :longitude,
                  :delivery_time,
                  :phone,
                  :logo_url,
                  :img_url)
  end
end

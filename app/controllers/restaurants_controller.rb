class RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
    json_response(@restaurants)
  end

  def show
    @restaurant = Restaurant.find(params[:id])
    json_response(@restaurant)
  end
end




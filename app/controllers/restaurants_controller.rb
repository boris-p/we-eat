class RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
    json_response(@restaurants)
  end

  def show
    begin
      @restaurant = Restaurant.find(params[:id])
      json_response(@restaurant)
    rescue ActiveRecord::RecordNotFound
      json_response({message: 'object not found'}, 404)
    end
  end
end

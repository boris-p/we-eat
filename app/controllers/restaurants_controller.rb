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

  def create
    @restaurant = Restaurant.new(restaurant_params)
    if @restaurant.save
      json_response({message: 'object created succussfully'}, 201)
    else
      json_response({message: "was not able to save. Error is #{@restaurant.errors.full_messages}"}, 400)
    end
  end

  def update
    begin
      @restaurant = Restaurant.find(params[:id])
      @restaurant.update(restaurant_params)
      head :no_content
    rescue ActiveRecord::RecordNotFound
      json_response({message: 'object not found'}, 404)
    end
  end

  def destroy
    begin
      @restaurant = Restaurant.find(params[:id])
      @restaurant.destroy
      head :no_content
    rescue ActiveRecord::RecordNotFound
      json_response({message: 'Could not destroy - object not found'}, 404)
    end
  end

  private

  def restaurant_params
    # whitelist params
    params.permit(:name, :url, :tenbis_id, :rating, :num_of_reviews, :address, :latitude, :longitude, :delivery_time, :phone, :logo_url, :img_url)
  end
end

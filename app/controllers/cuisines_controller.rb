class CuisinesController < ApplicationController
  before_action :set_cuisine, only: %i[show update destroy]

  def index
    cuisines = Cuisine.all
    json_response(cuisines)
  end

  def show
    json_response(@cuisine)
  end

  def create
    #if we want to save locally before committing to the db -
    # if @cuisine.save
    #   json_response({message: 'object created succussfully'}, 201)
    # else
    #   json_response({message: "was not able to save. Error is #{@cuisine.errors.full_messages}"}, 400)
    # end
    cuisine = Cuisine.create!(cuisine_params)
    json_response(cuisine, :created)
  end

  def update
    @cuisine.update!(cuisine_params)
    head :no_content
  end

  def destroy
    @cuisine.destroy
    head :no_content
  end

  private

  def set_cuisine
    @cuisine = Cuisine.find(params[:id])
  end

  def cuisine_params
    params.permit(:name)
  end
end

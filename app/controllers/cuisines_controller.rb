# frozen_string_literal: true

class CuisinesController < ApplicationController
  before_action :set_cuisine, only: %i(show update destroy)

  def index
    json_response(Cuisine.all)
  end

  def show
    json_response(@cuisine)
  end

  def create
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

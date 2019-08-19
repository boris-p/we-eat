# frozen_string_literal: true

class ReviewsController < ApplicationController
  before_action :set_restaurant
  before_action :set_review, only: [:show, :update, :destroy]

  def index
    @reviews = @restaurant.reviews
    json_response(@reviews)
  end

  def show
    json_response(@review)
  end

  def create
    @review = @restaurant.review.create!(review_params)
    json_response(@review, :created)
  end

  def update
    @review.update(review_params)
    head :no_content
  end

  def destroy
    @review.destroy
    head :no_content
  end

  private

  def set_restaurant
    @restaurant = Restaurant.find(params[:restaurant_id])
  end

  def set_review
    @review = Review.find(params[:id])
  end

  def review_params
    # whitelist params
    params.permit(:reviewers_name, :rating, :comment)
  end
end

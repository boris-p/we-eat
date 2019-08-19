# frozen_string_literal: true

class AddReviewForeginKey < ActiveRecord::Migration[5.2]
  def change
    add_reference :reviews, :restaurant, foreign_key: true
  end
end

# frozen_string_literal: true

class CuisineRestaurantsUpdateIndecies < ActiveRecord::Migration[5.2]
  def up
    remove_index('cuisines_restaurants', column: [:cuisine_id, :restaurant_id])
    add_index('cuisines_restaurants', 'restaurant_id')
  end

  def down
    add_index('cuisines_restaurants', ['cuisine_id', 'restaurant_id'])
    remove_index('cuisines_restaurants', column: 'restaurant_id')
  end
end

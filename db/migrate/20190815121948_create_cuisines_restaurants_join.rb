class CreateCuisinesRestaurantsJoin < ActiveRecord::Migration[5.2]
  def change
    create_table :cuisines_restaurants, :id => false do |t|
      t.integer "cuisine_id"
      t.integer "restaurant_id"
    end
    add_index("cuisines_restaurants", ["cuisine_id", "restaurant_id"])
  end
end

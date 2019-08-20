# frozen_string_literal: true

class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.integer :tenbis_id
      t.string :name
      t.string :url
      t.float :rating
      t.integer :num_of_reviews
      t.string :address
      t.float :latitude
      t.float :longitude
      t.integer :delivery_time
      t.string :phone
      t.string :logo_url
      t.string :img
      t.timestamps
    end
  end
end

# frozen_string_literal: true

class RestaurantsImgCol < ActiveRecord::Migration[5.2]
  def up
    rename_column('restaurants', 'img', 'img_url')
  end

  def down
    rename_column('restaurants', 'img_url', 'img')
  end
end

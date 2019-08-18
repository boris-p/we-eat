class CuisineAddIndex < ActiveRecord::Migration[5.2]
  def change
    add_index("cuisines", "name")
  end
end

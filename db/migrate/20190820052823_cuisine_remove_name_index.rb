class CuisineRemoveNameIndex < ActiveRecord::Migration[5.2]
  def up
    remove_index('cuisines', column: 'name')
  end

  def down
    add_index('cuisines', 'name')
  end
end

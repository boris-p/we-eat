class ChangeCousineTypeToName < ActiveRecord::Migration[5.2]
  def up
    rename_column("cuisines", "type", "name")
  end

  def down
    rename_column("cuisines", "name", "type")
  end
end

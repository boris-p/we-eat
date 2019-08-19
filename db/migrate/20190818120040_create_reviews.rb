# frozen_string_literal: true

class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :reviewers_name
      t.integer :rating, :null => false
      t.string :comment
      t.timestamps
    end
  end
end

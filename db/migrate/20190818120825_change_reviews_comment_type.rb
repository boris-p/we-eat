# frozen_string_literal: true

class ChangeReviewsCommentType < ActiveRecord::Migration[5.2]
  def up
    change_column('reviews', 'comment', :text)
  end

  def down
    change_column('reviews', 'comment', :string)
  end
end

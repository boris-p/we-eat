# frozen_string_literal: true

# == Schema Information
#
# Table name: reviews
#
#  id             :bigint           not null, primary key
#  reviewers_name :string
#  rating         :integer          not null
#  comment        :text
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  restaurant_id  :bigint
#

class Review < ApplicationRecord
  belongs_to :restaurant

  # validations
  validates_presence_of :reviewers_name, :rating
end

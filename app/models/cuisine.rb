# frozen_string_literal: true

# == Schema Information
#
# Table name: cuisines
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Cuisine < ApplicationRecord
  has_and_belongs_to_many :restaurants

  validates_presence_of :name
  validates_uniqueness_of :name
end

# frozen_string_literal: true

# == Schema Information
#
# Table name: restaurants
#
#  id             :bigint           not null, primary key
#  tenbis_id      :integer
#  name           :string
#  url            :string
#  rating         :float
#  num_of_reviews :integer
#  address        :string
#  latitude       :float
#  longitude      :float
#  delivery_time  :integer
#  phone          :string
#  logo_url       :string
#  img_url        :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Restaurant < ApplicationRecord
  has_and_belongs_to_many :cuisines

  # validations
  validates_presence_of :name, :url, :address, :latitude, :longitude
  validates_length_of :phone, :minimum => 3
  validates :name, length: { in: 2..100 }
  validates :rating, inclusion: { in: 0..10 }
  validates :delivery_time, inclusion: { in: 0..120 }
  validates :latitude, numericality: { only_integer: false, greater_than_or_equal_to: 0, less_than_or_equal_to: 90 }
  validates :longitude, numericality: { only_integer: false, greater_than_or_equal_to: 0, less_than_or_equal_to: 180 }
end

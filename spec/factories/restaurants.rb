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

FactoryBot.define do
  factory :restaurant do
    name { Faker::Lorem.characters(number: 20) }
    url { Faker::Internet.url }
    address { Faker::Address.full_address }
    latitude { Faker::Address.latitude }
    longitude { Faker::Address.longitude }
    phone { Faker::PhoneNumber.cell_phone }
    rating { Faker::Number.between(from: 0, to: 10) }
    delivery_time { Faker::Number.between(from: 0, to: 120) }
  end
end

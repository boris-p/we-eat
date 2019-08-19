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

FactoryBot.define do
  factory :review do
    reviewers_name { Faker::Name.first_name }
    rating { Faker::Number.between(from: 0, to: 10) }
    comment { Faker::Lorem.sentence }
  end
end

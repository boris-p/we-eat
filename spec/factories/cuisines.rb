# == Schema Information
#
# Table name: cuisines
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryBot.define do
  factory :cuisine do
    name { Faker::Lorem.characters(number: 20) }
  end
end

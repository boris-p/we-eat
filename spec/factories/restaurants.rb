FactoryBot.define do
  factory :restaurant do
    name {Faker::Lorem.name}
    rating {Faker::Number.between(from: 0.00, to: 10.00) }
  end
end
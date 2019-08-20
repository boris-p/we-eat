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

require 'rails_helper'

RSpec.describe Restaurant, type: :model do
  it { should have_and_belong_to_many(:cuisines) }

  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:url) }
  it { should validate_presence_of(:address) }
  it { should validate_presence_of(:latitude) }
  it { should validate_presence_of(:longitude) }
  it { should validate_length_of(:phone) }
end

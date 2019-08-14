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

require "rails_helper"

RSpec.describe Restaurant, type: :model do
  # is it common to do these sorts of tests?
  # feels kind of redundant as it mimics what we have in the model
  #
  # are there other tests on the models that are usually done?
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:url) }
  it { should validate_presence_of(:address) }
  it { should validate_presence_of(:latitude) }
  it { should validate_presence_of(:longitude) }
  it { should validate_length_of(:phone) }
end

# == Schema Information
#
# Table name: cuisines
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Cuisine, type: :model do

  it { should have_and_belong_to_many(:restaurants) }
  
  it { should validate_presence_of(:name) }
  it { should validate_uniqueness_of(:name) }
end

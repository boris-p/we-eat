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

require 'rails_helper'

RSpec.describe Review, type: :model do
  it { should belong_to(:restaurant) }
end

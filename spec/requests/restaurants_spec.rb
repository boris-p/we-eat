require 'rails_helper'

RSpec.describe 'Restaurants api', type: :request do
  let!(:restaurants) {create_list(:restaurant,5)}
  let(:rest_id){ restaurants.first.id}

  # Test suite for GET /restaurants
  describe 'GET /restaurants' do
    # make HTTP get request before each example
    before { get '/restaurants' }

    it 'returns restaurants' do
      # Note `json` is a custom helper to parse JSON responses
      expect(json).not_to be_empty
      expect(json.size).to eq(5)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

end
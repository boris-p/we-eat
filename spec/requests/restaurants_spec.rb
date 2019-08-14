require "rails_helper"

RSpec.describe "Restaurants api", type: :request do
  let!(:restaurants) { create_list(:restaurant, 5) }
  let(:rest_id) { restaurants.first.id }

  # Test suite for GET /restaurants
  describe "GET /restaurants" do
    # make HTTP get request before each example
    before { get "/restaurants" }

    it "returns restaurants with the correct status code " do
      # Note `json` is a custom helper to parse JSON responses
      expect(json).not_to be_empty
      expect(json.size).to eq(5)
      expect(response).to have_http_status(200)
    end
  end
  describe "GET /restaurants/:id" do
    before { get "/restaurants/#{rest_id}" }

    context 'when the restaurant exists' do
      it 'returns the restaurant object' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(rest_id)
        expect(response).to have_http_status(200)
      end
    end
    context 'when the restaurant does not exist' do
      let(:rest_id) { 22 }
      it 'returns a 404 status code' do
        expect(response).to have_http_status(404)
      end
    end
  end
end

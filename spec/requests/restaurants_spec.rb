# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Restaurants api', type: :request do
  let!(:restaurants) { create_list(:restaurant, 5) }
  let(:rest_id) { restaurants.first.id }

  describe 'GET /restaurants' do
    before { get '/restaurants' }

    it 'returns restaurants with the correct status code ' do
      # Note `json` is a custom helper to parse JSON responses
      expect(json).not_to be_empty
      expect(json.size).to eq(5)
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /restaurants/:id' do
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

  describe 'POST /restaurants' do
    context 'when the restaurant fields are valid' do
      before { post '/restaurants', params: attributes_for(:restaurant) }

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the restaurant fields are not valid' do
      before { post '/restaurants', params: { bad_param: 'really bad params' } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end
    end
  end

  describe 'PATCH /restaurants/:id' do
    context 'when restaurant exists' do
      before { patch "/restaurants/#{rest_id}", params: { name: 'new rest name' } }

      it 'return status code 204' do
        expect(response).to have_http_status(204)
      end
    end

    context 'when restaurant does not exist' do
      let(:rest_id) { 22 }

      before { patch "/restaurants/#{rest_id}", params: { name: 'new rest name' } }

      it 'return status code 404' do
        expect(response).to have_http_status(404)
      end
    end
  end

  describe 'DELETE /restaurants/:id' do
    before { delete "/restaurants/#{rest_id}" }

    context 'when trying to delete a restaurant that exists' do
      it 'return status code 204' do
        expect(response).to have_http_status(204)
      end
    end

    context 'when trying to delete a restaurant that does not exist' do
      let(:rest_id) { 22 }

      it 'returns a 404 status code' do
        expect(response).to have_http_status(404)
      end
    end
  end
end

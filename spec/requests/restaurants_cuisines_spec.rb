# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Restaurants Cuisines api', type: :request do
  let!(:restaurant) { create(:restaurant) }
  let!(:cuisines) { create_list(:cuisine, 5) }

  let(:rest_id) { restaurant.id }
  let(:cuisine_id) { cuisines.first.id }

  #----------------------------------------------------
  # add cuisine to a restaurant
  #----------------------------------------------------
  describe 'PATCH /restaurants/:restaurant_id/cuisines/:id' do
    before { patch "/restaurants/#{rest_id}/cuisines/#{cuisine_id}" }

    context 'when cuisine was not previously included in the restaurant' do
      it 'return status 204' do
        expect(response).to have_http_status(204)
      end
    end

    context 'when cuisine is already included in the restaurant' do
      before { patch "/restaurants/#{rest_id}/cuisines/#{cuisine_id}" }

      it 'return status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end
  #----------------------------------------------------
  # remove a cuisine from a restaurant
  #----------------------------------------------------

  describe 'DELETE /restaurants/:restaurant_id/cuisines/:id' do
    before do
      patch "/restaurants/#{rest_id}/cuisines/#{cuisine_id}"
      delete "/restaurants/#{rest_id}/cuisines/#{cuisine_to_delete}"
    end

    context "when trying to delete a cuisine from a restaurant" do
      let(:cuisine_to_delete) { cuisines.first.id }

      it 'return status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end
end

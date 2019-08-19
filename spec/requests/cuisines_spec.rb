# frozen_string_literal: true

require 'rails_helper'

cuisines_number = 5
RSpec.describe 'Cuisines api', type: :request do
  let!(:cuisines) { create_list(:cuisine, cuisines_number) }
  let(:cuisine_id) { cuisines.first.id }

  describe 'GET /cuisines' do
    before { get '/cuisines' }

    it 'returns cuisines with the correct status code ' do
      expect(json).not_to be_empty
      expect(json.size).to eq(cuisines_number)
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /cuisines/:id' do
    before { get "/cuisines/#{cuisine_id}" }

    context 'when the cuisine exists' do
      it 'returns the cuisine object' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(cuisine_id)
        expect(response).to have_http_status(200)
      end
    end

    context 'when the cuisine does not exist' do
      let(:cuisine_id) { 22 }

      it 'returns a 404 status code' do
        expect(response).to have_http_status(404)
      end
    end
  end

  describe 'POST /cuisines' do
    context 'when the cuisine fields are valid' do
      before { post '/cuisines', params: { name: 'asian' } }

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the cuisine fields are not valid' do
      before { post '/cuisines', params: { bad_param: 'really bad params' } }

      it 'returns status code 400' do
        expect(response).to have_http_status(400)
      end
    end
  end

  describe 'PATCH /cuisines/:id' do
    context 'when cuisine exists' do
      before { patch "/cuisines/#{cuisine_id}", params: { name: 'fusion' } }

      it 'return status code 204' do
        expect(response).to have_http_status(204)
      end
    end

    context 'when restaurant does not exist' do
      let(:cuisine_id) { 22 }

      before { patch "/cuisines/#{cuisine_id}", params: { name: 'fusion' } }

      it 'return status code 404' do
        expect(response).to have_http_status(404)
      end
    end
  end

  describe 'DELETE /cuisines/:id' do
    before { delete "/cuisines/#{cuisine_id}" }

    context 'when trying to delete a cuisine that exists' do
      it 'return status code 204' do
        expect(response).to have_http_status(204)
      end
    end

    context 'when trying to delete a cuisine that does not exist' do
      let(:cuisine_id) { 22 }

      it 'returns a 404 status code' do
        expect(response).to have_http_status(404)
      end
    end
  end
end

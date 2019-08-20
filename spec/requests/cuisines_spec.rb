# frozen_string_literal: true

require 'rails_helper'

EMPTY_ID = 22
RSpec.describe 'Cuisines api', type: :request do
  let!(:cuisines) { create_list(:cuisine, 5) }
  let(:cuisine_id) { cuisines.first.id }

  describe 'GET /cuisines' do
    before { get '/cuisines' }

    it 'returns cuisines with the correct status code ' do
      expect(json).not_to be_empty
      expect(json.size).to eq(5)
      expect(response).to have_http_status(:ok)
    end
  end

  describe 'GET /cuisines/:id' do
    before { get "/cuisines/#{cuisine_id}" }

    context 'when the cuisine exists' do
      it 'returns the cuisine object' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(cuisine_id)
        expect(response).to have_http_status(:ok)
      end
    end

    context 'when the cuisine does not exist' do
      let(:cuisine_id) { EMPTY_ID }

      it 'returns a not found status' do
        expect(response).to have_http_status(:not_found)
      end
    end
  end

  describe 'POST /cuisines' do
    context 'when the cuisine fields are valid' do
      before { post '/cuisines', params: attributes_for(:cuisine) }

      it 'returns created status' do
        expect(response).to have_http_status(:created)
      end
    end

    context 'when the cuisine fields are not valid' do
      before { post '/cuisines', params: { bad_param: 'really bad params' } }

      it 'returns status code of unprocessable_entity' do
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  describe 'PATCH /cuisines/:id' do
    context 'when cuisine exists' do
      before { patch "/cuisines/#{cuisine_id}", params: { name: 'fusion' } }

      it 'return no_content status' do
        expect(response).to have_http_status(:no_content)
      end
    end

    context 'when restaurant does not exist' do
      let(:cuisine_id) { EMPTY_ID }

      before { patch "/cuisines/#{cuisine_id}", params: { name: 'fusion' } }

      it 'return a not found status' do
        expect(response).to have_http_status(:not_found)
      end
    end
  end

  describe 'DELETE /cuisines/:id' do
    before { delete "/cuisines/#{cuisine_id}" }

    context 'when deleting a cuisine that exists' do
      it 'return no content status' do
        expect(response).to have_http_status(:no_content)
      end
    end

    context 'when deleting a cuisine that does not exist' do
      let(:cuisine_id) { EMPTY_ID }

      it 'returns a not found status ' do
        expect(response).to have_http_status(:not_found)
      end
    end
  end
end

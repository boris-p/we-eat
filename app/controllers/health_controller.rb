# frozen_string_literal: true

class HealthController < ApplicationController
  def index
    json_response(message: 'healthy', status: 200)
  end
end

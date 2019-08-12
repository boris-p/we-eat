class HealthController < ApplicationController
  def index
    render html: '<div>healthy</div>'.html_safe
  end
end

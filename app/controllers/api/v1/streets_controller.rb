# frozen_string_literal: true

class Api::V1::StreetsController < Api::V1::BaseController
  def index
    respond_with streets
  end

  private

  def streets
    @streets ||= Street.all
  end
end

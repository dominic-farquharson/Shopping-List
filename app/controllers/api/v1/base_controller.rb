# base controller
=begin
  all actions from controller will respond with JSON
=end
class Api::V1::BaseController < ApplicationController
  respond_to :json
end

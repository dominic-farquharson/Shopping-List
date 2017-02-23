class ApplicationController < ActionController::Base
  # throwing a null session
  protect_from_forgery with: :null_session
end

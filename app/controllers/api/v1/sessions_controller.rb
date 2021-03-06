# frozen_string_literal: true

# This class logging session with spotify API
class Api::V1::SessionsController < ApplicationController
  def create
    query_params = {
      client_id: ENV['CLIENT_ID'],
      response_type: 'code',
      redirect_uri: ENV['REDIRECT_URI'],
      scope: 'user-read-private user-read-email
              user-follow-read user-follow-modify',
      show_dialog: true
    }

    url = 'https://accounts.spotify.com/authorize'
    redirect_to "#{url}?#{query_params.to_query}"
  end
end

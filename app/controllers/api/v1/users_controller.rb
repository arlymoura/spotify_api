# frozen_string_literal: true

class Api::V1::UsersController < ApplicationController
  def create
    auth_params = SpotifyApiAdapter.login(params['code'])
    user_data = SpotifyApiAdapter.getUserData(auth_params['access_token'])
    user_fallowing = SpotifyApiAdapter.getUserFallowing(
      auth_params['access_token'],
      user_data['followers']['total']
    )
    user = User.find_or_create_by(user_params(user_data))
    encoded_access = auth_params['access_token'].encode
    encoded_refresh = auth_params['refresh_token'].encode
    user.update(access_token: encoded_access, refresh_token: encoded_refresh)
    render json: user.to_json(except: %i[access_token refresh_token
                                         created_at updated_at])
  end

  private

  def user_params(user_data)
    {
      spotify_id: user_data['id'],
      email: user_data['email'],
      display_name: user_data['display_name'],
      spotify_url: user_data['external_urls']['spotify'],
      profile_img_url: user_data['images'][0] ? user_data['images'][0]['url'] : nil
    }
  end
end

# frozen_string_literal: true

class Api::V1::UsersController < ApplicationController
  def create
    auth_params = SpotifyApiAdapter.login(params['code'])
    access_token = auth_params['access_token']
    refresh_token = auth_params['access_token']
    user_data = SpotifyApiAdapter.get_user_data(access_token)
    user_fallowing = SpotifyApiAdapter
                     .get_user_fallowing(access_token,
                                         user_data['followers']['total'])

    user = User.find_or_create_by(user_params(user_data))
    nested_artists(user_fallowing['artists']['items'], user)

    user.update(access_token: access_token.encode,
                refresh_token: refresh_token.encode)

    render json: user.to_json(include: :artists, except:
                              %i[access_token refresh_token created_at updated_at])
  end

  private

  def user_params(user_data)
    {
      spotify_id: user_data['id'],
      email: user_data['email'],
      display_name: user_data['display_name'],
      spotify_url: user_data['external_urls']['spotify'],
      profile_img_url: get_img(user_data['images'][0])
    }
  end

  def nested_artists(artist_data, usr)
    artist_data.map do |data|
      usr.artists.build(extract_artist(data))
    end
  end

  def extract_artist(data)
    {
      display_name: data['name'],
      spotify_id: data['id'],
      spotify_url: data['external_urls']['spotify'],
      genere: data['generes'],
      followers_count: data['followers']['total'],
      img_big_url: get_img(data['images'][0]),
      img_mid_url: get_img(data['images'][1]),
      img_small_url: get_img(data['images'][2])
    }
  end

  def get_img(img)
    img ? img['url'] : ''
  end
end

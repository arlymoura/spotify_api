# frozen_string_literal: true

# This class that makes connection with api spotify
class SpotifyApiAdapter
  def self.urls
    {
      'auth': 'https://accounts.spotify.com/api/token',
      'me': 'https://api.spotify.com/v1/me',
      'artists_fallowing': 'api.spotify.com/v1/me/following?type=artist&limit='

    }
  end

  def self.body_params
    {
      client_id: ENV['CLIENT_ID'],
      client_secret: ENV['CLIENT_SECRET']
    }
  end

  def self.login(code)
    body = body_params.dup
    body[:grant_type] = 'authorization_code'
    body[:code] = code
    body[:redirect_uri] = ENV['REDIRECT_URI']

    auth_response = RestClient.post(urls['auth'], body)
    JSON.parse(auth_response.body)
  end

  def self.get_user_data(access_token)
    header = {
      "Authorization": "Bearer #{access_token}"
    }

    user_response = RestClient.get(urls['me'], header)

    JSON.parse(user_response.body)
  end

  def self.get_user_fallowing(token, limit = 0)
    header = {
      "Authorization": "Bearer #{token}"
    }
    limit = limit >= 50 ? 50 : limit

    resp = RestClient.get(urls['artists_fallowing'] + limit.to_s, header)

    JSON.parse(resp.body)
  end
end

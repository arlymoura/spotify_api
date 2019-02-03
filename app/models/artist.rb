class Artist < ApplicationRecord
  belongs_to :user
  validates_uniqueness_of :spotify_id
end

class User < ApplicationRecord
  has_many :artists, dependent: :destroy
  accepts_nested_attributes_for :artists, allow_destroy: true
  validates_uniqueness_of :spotify_id
  validates_uniqueness_of :email
end

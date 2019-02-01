class User < ApplicationRecord
  has_many :artists, dependent: :destroy
  accepts_nested_attributes_for :artists, allow_destroy: true
end

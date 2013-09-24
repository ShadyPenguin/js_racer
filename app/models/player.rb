class Player < ActiveRecord::Base
  validates :name, uniqueness: {case_sensitive: false}
  validates :name, presence: true

  has_many :races
  has_many :games, through: :races
end

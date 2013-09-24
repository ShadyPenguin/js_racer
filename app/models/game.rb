class Game < ActiveRecord::Base
  has_many :races
  has_many :players, through: :races
end

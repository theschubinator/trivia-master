class Game < ApplicationRecord
	belongs_to :user
	has_and_belongs_to_many :questions
	has_many :results
end

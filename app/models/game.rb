class Game < ApplicationRecord
	belongs_to :user
	has_and_belongs_to_many :questions
	has_and_belongs_to_many :results

	def results=(results)
		results.each do |result|
			result = Result.find_or_create_by(correct: result)
			self.results << result
		end
	end
end


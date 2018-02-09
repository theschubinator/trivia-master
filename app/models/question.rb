class Question < ApplicationRecord
	belongs_to :category
	belongs_to :user
	has_and_belongs_to_many :games

	def category_name=(name)
		self.category = Category.find_by(name: name)
	end
end

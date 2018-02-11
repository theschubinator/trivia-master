class Question < ApplicationRecord
	belongs_to :category
	belongs_to :user
	has_and_belongs_to_many :games

	validates :question, presence: true
	validates :answer, presence: true
	validates :incorrect1, presence: true
	validates :incorrect2, presence: true
	validates :incorrect3, presence: true

	def category_name=(name)
		self.category = Category.find_by(name: name)
	end
end

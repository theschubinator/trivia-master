class GameSerializer < ActiveModel::Serializer
  	attributes :id, :category, :correct
  	# belongs_to :user
  	# has_many :questions
  	# has_many :results
end

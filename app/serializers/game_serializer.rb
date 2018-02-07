class GameSerializer < ActiveModel::Serializer
  	attributes :id, :category, :correct
  	# belongs_to :user
  	# has_many :questions, serializer: GameQuestionsSerializer
  	# has_many :results, serializer: GamesResultsSerializer
end

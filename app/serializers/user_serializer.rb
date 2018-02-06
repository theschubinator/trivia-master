class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :admin, :userGames
  has_many :questions
  # has_many :games

  def userGames
  	games = []
  	object.games.map do | game |
  		games << {questions: game.questions, results: game.results}
  	end
  	games
  end
end

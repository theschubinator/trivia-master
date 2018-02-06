class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :admin
  # has_many :games

  def games_played
    object.games.size
  end

  # def userGames
  # 	allGames = []
  # 	object.games.map do | game |
  # 		allGames << {questions: question(game.questions), results: result(game.results)}
  # 	end
  # 	allGames
  # end

  # def question(questions)
  # 	questions.map do | question |
  # 		{question: question.question, answer: question.answer, incorrect1: question.incorrect1, incorrect2: question.incorrect2, incorrect3: question.incorrect3, category: question.category.name }
  # 	end
  # end

  # def result(results)
  # 	results.map do | result |
  # 		{correct: result.correct}
  # 	end
  # end

end

class Api::GamesController < ApplicationController
		before_action :find_user
	def index
		@games = @user.games 
		render json: @games
	end

	def show
		game = @user.games.find(params[:id])
		render json: { questions: game.questions, results: game.results.pluck(:correct)}
	end

	def create
		game = Game.new(game_params)
		if game.save
			update_user_stats(game)
			render json: {game: game, user: @user}
		else
			render json: { error: 'Game could not be save'}
		end
	end

	private
		def game_params
			params.require(:gameData).permit(:user_id, :category, :correct, question_ids:[], results:[])
		end

		def find_user
			@user = User.find(params[:user_id])
		end

		def update_user_stats(game)
			@user.games_played += 1
			@user.total_correct += game.results.select{|result| result.correct == true}.size

			game.questions.each_with_index.map do |question, i|
				category = question.category.name
				if category == 'History'
					@user.history_played += 1
					@user.history_correct += 1 if game.results[i].correct
				elsif category == 'Science'
					@user.science_played += 1
					@user.science_correct += 1 if game.results[i].correct
				elsif category == 'Entertainment'
					@user.entertainment_played += 1
					@user.entertainment_correct += 1 if game.results[i].correct
				elsif category == 'Sports'
					@user.sports_played += 1
					@user.sports_correct += 1 if game.results[i].correct
				end
			end
			@user.save
		end
end
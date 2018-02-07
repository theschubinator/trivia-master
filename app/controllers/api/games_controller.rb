class Api::GamesController < ApplicationController
		before_action :find_user
	def index
		@games = @user.games 
		render json: @games
	end

	def create
		game = Game.new(game_params)
		if game.save
			render json: game
		else
			render json: { error: 'Game could not be save'}
		end
	end

	private
		def game_params
			params.require(:gameData).permit(:user_id, :category, question_ids:[], results:[])
		end

		def find_user
			@user = User.find(params[:user_id])
		end
end
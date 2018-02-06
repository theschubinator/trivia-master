class Api::GamesController < ApplicationController
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
			params.require(:gameData).permit(:user_id, question_ids:[], results:[])
		end
end
class Api::SessionsController < ApplicationController
	def create
		user = User.find_by(username: params[:username])
		if (!user)
			render json: { error: 'Username does not exist' }
		else
			if user.authenticate(params[:password])
				render json: user
			else
				render json: { error: 'Invalid Password, Please Try Again'}
			end
		end
	end
end
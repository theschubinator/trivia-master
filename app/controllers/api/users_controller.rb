class Api::UsersController < ApplicationController
	before_action :find_user, only:[:show, :edit, :update, :destroy]
	def index 
		@users = User.all
		render json: @users
	end

	def show
		render json: @user
	end

	def edit
		if @user.update(user_params)
			render json: @user
		else
			render json: {error: 'User cannot be updated'}
		end
	end

	def create
		user = User.new(user_params)
		if user.save
			render json: user
		else
			render json: {errors: user.errors.full_messages}, status: 400
		end
	end

	def update
	 if @user.update(user_params)
	 	render json: @user
	 else
	 	render json: {error: 'User cannot be updated'}
	 end
	end

	def destroy
		if @user.destroy
			render json: {message: 'User accoutn was deleted'}
		else
			render json: {error: 'User cannot be deleted'}
		end
	end

	private
		def find_user
			@user = User.find(params[:id])
		end

		def user_params
			params.require(:user).permit(:username, :email, :password, :password_confirmation)
		end
end
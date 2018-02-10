class Api::QuestionsController < ApplicationController
	before_action :find_question, only: [:update, :destroy]
	def index
		@questions = Question.all
		render json: @questions
	end

	def create
		question = Question.new(question_params)
		if question.save
			render json: question
		else
			render json: {error: 'Question could not be save'}
		end
	end

	def update
		if @question.update(question_params)
			render json: @question
		else
			render json: {message: 'Question cannot be updated'}
		end
	end

	def destroy
		if @question.destroy
			render json: {message: 'Question was deleted'}
		else
			render json: {error: 'Question could not be deleted'}
		end
	end

	private
		def question_params
			params.require(:formData).permit(:question, :answer, :incorrect1, :incorrect2, :incorrect3, :user_id, :category_name)
		end

		def find_question
			@question = Question.find(params[:id])
		end
end
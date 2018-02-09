class Api::QuestionsController < ApplicationController
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

	private
		def question_params
			params.require(:formData).permit(:question, :answer, :incorrect1, :incorrect2, :incorrect3, :user_id, :category_name)
		end
end
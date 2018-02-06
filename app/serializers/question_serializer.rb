class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :question, :answer, :incorrect1, :incorrect2, :incorrect3, :category_id
  # belongs_to :user
  # belongs_to :category
end

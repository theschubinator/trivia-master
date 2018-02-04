class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :question, :incorrect1, :incorrect2, :incorrect3
  # belongs_to :user
  belongs_to :category
end

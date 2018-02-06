class GameSerializer < ActiveModel::Serializer
  attributes :id
  	belongs_to :user
  	has_many :questions
  	has_many :results
end

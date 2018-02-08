class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :admin, :total_correct, :sports_correct, :history_correct, :entertainment_correct, :science_correct, :games_played, :history_played, :science_played, :entertainment_played, :sports_played
  # has_many :games
end

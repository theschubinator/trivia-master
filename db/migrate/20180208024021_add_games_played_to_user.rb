class AddGamesPlayedToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :games_played, :integer, default: 0
  end
end

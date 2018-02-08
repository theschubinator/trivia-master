class AddQuestionsPlayedByCategoryToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :history_played, :integer, default: 0
    add_column :users, :science_played, :integer, default: 0
    add_column :users, :entertainment_played, :integer, default: 0
    add_column :users, :sports_played, :integer, default: 0
  end
end

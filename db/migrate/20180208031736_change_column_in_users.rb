class ChangeColumnInUsers < ActiveRecord::Migration[5.1]
  def change
  	rename_column :users, :science, :science_correct
  	rename_column :users, :history, :history_correct
  	rename_column :users, :entertainment, :entertainment_correct
  	rename_column :users, :sports, :sports_correct
  end
end

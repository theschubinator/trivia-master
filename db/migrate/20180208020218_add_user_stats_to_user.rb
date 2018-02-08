class AddUserStatsToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :total, :integer
    add_column :users, :sports, :integer
    add_column :users, :history, :integer
    add_column :users, :entertainment, :integer
    add_column :users, :science, :integer
  end
end

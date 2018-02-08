class AddUserStatsToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :total, :integer, default: 0
    add_column :users, :sports, :integer, default: 0
    add_column :users, :history, :integer, default: 0
    add_column :users, :entertainment, :integer, default: 0
    add_column :users, :science, :integer, default: 0
  end
end

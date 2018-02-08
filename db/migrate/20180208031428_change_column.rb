class ChangeColumn < ActiveRecord::Migration[5.1]
  def change
  	rename_column :users, :total, :total_correct
  end
end

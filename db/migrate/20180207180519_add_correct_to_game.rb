class AddCorrectToGame < ActiveRecord::Migration[5.1]
  def change
    add_column :games, :correct, :integer
  end
end

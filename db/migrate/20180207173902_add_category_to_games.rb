class AddCategoryToGames < ActiveRecord::Migration[5.1]
  def change
    add_column :games, :category, :string
  end
end

class CreateUserStats < ActiveRecord::Migration[5.1]
  def change
    create_table :user_stats do |t|
      t.string :UserStats
      t.integer :total
      t.integer :sports
      t.integer :history
      t.integer :entertainment
      t.integer :science
      t.integer :user_id
    end
  end
end

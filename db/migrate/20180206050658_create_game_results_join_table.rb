class CreateGameResultsJoinTable < ActiveRecord::Migration[5.1]
  def change
  	create_table :games_results do |t|
      t.integer :game_id
      t.integer :result_id

      t.timestamps
    end
  end
end

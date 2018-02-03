class CreateGamesQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :games_questions do |t|
      t.integer :game_id
      t.integer :question_id

      t.timestamps
    end
  end
end

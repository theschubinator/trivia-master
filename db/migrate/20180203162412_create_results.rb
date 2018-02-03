class CreateResults < ActiveRecord::Migration[5.1]
  def change
    create_table :results do |t|
      t.boolean :correct
      t.integer :game_id

      t.timestamps
    end
  end
end

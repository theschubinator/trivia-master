class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.string :question
      t.string :answer
      t.string :incorrect1
      t.string :incorrect2
      t.string :incorrect3
      t.integer :category_id
      t.integer :user_id

      t.timestamps
    end
  end
end

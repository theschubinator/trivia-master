class RemoveGameIdFromResults < ActiveRecord::Migration[5.1]
  def change
    remove_column :results, :game_id, :integer
  end
end

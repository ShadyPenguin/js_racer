class CreatePlayers < ActiveRecord::Migration
  def change
    create_table  :players do |t|
      t.string    :name, null: false
      t.timestamps
    end
    add_index :players, :name, unique: true
  end
end

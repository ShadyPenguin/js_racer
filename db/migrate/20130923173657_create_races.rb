class CreateRaces < ActiveRecord::Migration
  def change
    create_table  :races do |t|

      t.belongs_to  :player
      t.belongs_to  :game
      
      t.timestamps
    end
  end
end

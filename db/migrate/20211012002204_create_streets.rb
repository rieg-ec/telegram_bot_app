class CreateStreets < ActiveRecord::Migration[5.2]
  def change
    create_table :streets do |t|
      t.integer :parking_slots
      t.integer :occupied_slots
      t.string :name

      t.timestamps
    end
  end
end

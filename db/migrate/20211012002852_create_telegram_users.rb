class CreateTelegramUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :telegram_users do |t|
      t.string :telegram_id
      t.references :street, foreign_key: true

      t.timestamps
    end
  end
end

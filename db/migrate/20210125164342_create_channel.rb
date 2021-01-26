class CreateChannel < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.boolean :status_public, null:false
      t.string :topic, null: false 
      t.integer :author_id, null:false
      t.timestamps
    end
    add_index :channels, :name, unique: true
    add_index :channels, :author_id
  end
end
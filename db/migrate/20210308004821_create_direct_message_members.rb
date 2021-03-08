class CreateDirectMessageMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :direct_message_members do |t|
      t.references :message, foreign_key: true, index:true
      t.references :user, foreign_key: true, index:true 

      t.timestamps
    end
  end
end

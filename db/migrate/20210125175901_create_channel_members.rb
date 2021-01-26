class CreateChannelMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :channel_members do |t|
      t.references :channel, foreign_key: true, index:true
      t.references :user, foreign_key: true, index:true 

      t.timestamps
    end
  end
end

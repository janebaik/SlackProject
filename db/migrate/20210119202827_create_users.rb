class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.integer :user_id, null:false
      t.string :username, null:false, unique: true
      t.string :email, null:false, unique: true
      t.string :password_digest, null:false
      t.string :session_token, null:false, unique: true
      t.datetime :created_at, null:false, unique: true
      t.datetime :updated_at, null:false, unique: true
    end
  end
end

class AddNameToDirectMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :direct_messages, :name, :string
  end
end

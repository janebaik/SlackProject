class ChangeMessagesToDirectMessages < ActiveRecord::Migration[5.2]
  def change
    rename_table :messages, :direct_messages
  end
end

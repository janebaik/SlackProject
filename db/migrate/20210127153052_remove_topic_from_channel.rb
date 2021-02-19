class RemoveTopicFromChannel < ActiveRecord::Migration[5.2]
  def change
    remove_column :channels, :topic, :string
  end
end

# == Schema Information
#
# Table name: channels
#
#  id            :bigint           not null, primary key
#  name          :string           not null
#  status_public :boolean          not null
#  topic         :string           not null
#  author_id     :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Channel < ApplicationRecord

    validates :name, :status_public, :author_id, presence: true
    # validates :topic allow_nil: true  <-- not sure if I want to do this

end

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
    validates :topic, length:{minimum: 3}, allow_blank: true # <-- not sure if I want to do this

    has_many :channel_member
    has_many :user, through: :channel_members

    def self.find_by_name(name)
        channel = Channel.find_by(name: name)
        debugger
        return nil unless channel
        channel
    end

end

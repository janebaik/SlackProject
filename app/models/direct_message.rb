# == Schema Information
#
# Table name: messages
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class DirectMessage < ApplicationRecord

    has_many :direct_message_members, dependent: :destroy
    has_many :user,   #endoiunt
    through: :channel_member
end

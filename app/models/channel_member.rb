# == Schema Information
#
# Table name: channel_members
#
#  id         :bigint           not null, primary key
#  channel_id :bigint
#  user_id    :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ChannelMember < ApplicationRecord
  
end

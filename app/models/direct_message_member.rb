# == Schema Information
#
# Table name: direct_message_members
#
#  id         :bigint           not null, primary key
#  message_id :bigint
#  user_id    :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class DirectMessageMember < ApplicationRecord
    

    
end

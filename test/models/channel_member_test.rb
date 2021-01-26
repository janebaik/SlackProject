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
require 'test_helper'

class ChannelMemberTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

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

    validates :name, :author_id, presence: true
    validates :author_id, length:{minimum: 1}, allow_blank: true 

    has_many :channel_member, dependent: :destroy
    has_many :user,   #endoiunt
    through: :channel_member
# get the author_id

end

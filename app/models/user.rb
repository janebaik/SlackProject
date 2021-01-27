# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

    validates :username, :email, presence: true
    validates :session_token, presence: true, uniqueness: true
    debugger
    validates :password, length: { minimum: 6, allow_nil: true}
    debugger
    validates :password_digest, presence: {message: "Password cannot be empty"}


    after_initialize :ensure_session_token
    
    attr_reader :password

    # 26.1.2020
    has_many :channel_member, dependent: :destroy
    has_many :channel,
    through: :channel_member
    #


    
    def self.find_by_credentials(email, password)
        user = User.find_by(email:email)
        # debugger
        return nil unless user && user.is_password?(password)
        user
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
        # BCrypt::Password.new(self.password_digest) has a is_password? method that can be called
    end

    def self.generate_session_token!
        SecureRandom::urlsafe_base64
    end

    def password=(password)
        @pasword = password 
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token!
    end

    def reset_session_token!
        self.update!(session_token: User.generate_session_token!)
        self.session_token

    end


end

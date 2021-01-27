class ApplicationController < ActionController::Base
    # CELL
    helper_method :current_user, :loggedin?, :current_channels
    protect_from_forgery with: :exception # raises an excpetions when a request fails validations

    def current_user
        # debugger #good thing
        @current_user ||= User.find_by(session_token: session[:session_token])  
    end

    def login!(user)
        # @user = user
        session[:session_token] = user.reset_session_token!
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
    end

    def loggedin?
        # debugger
        !!current_user
    end

    def current_channels
        @channel ||= Channel.all
    end

end

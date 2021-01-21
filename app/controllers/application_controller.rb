class ApplicationController < ActionController::Base
    # CELL
    # helper_method :current_user, :loggedin? (frontend logic)

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])  
    end

    def login!(user)
        @user = user
        session[:session_token] = user.reset_session_token!
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
    end

    def loggedin?
        !!current_user
    end

    # (frontend logic)
    # def ensure_logged_in!
    #     redirect_to ... unless loggedin?
    # end

end

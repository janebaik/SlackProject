class Api::SessionsController < ApplicationController

    def create
        # login
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password])
        if @user #user is able to be found (meaning there is a username and correct password)
            login!(@user)
            render 'api/users/show'
        else
            render json: ['The username or password is invalid'], status: 401
        end
    end

    def destroy
        # logout
        @user = current_user
        if @user
            #  
            logout!
            render json: {}, status: 200
        else
            render json: ['You are not signed in'], status: 404
        end
    end

end


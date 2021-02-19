class Api::UsersController < ApplicationController
    def create 
        # create a new user
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            #  
            render json: @user.errors.full_messages, status: 422
        end
    end

    # NOTE: I dont think we need these methods...? Here we are creating the new user 
    def index
        # display all the users 
        @users = User.all
        #  
        # render json: @users
        render :index
    end

    def show
        # show one user
        @user = User.find(params[:id])
        render :show
    end

    def destroy 
        #  
        @user = User.find(params[:id])
        @user.destroy
        #  
        render :show
    end
    # def update 
    #     # update user
    #     @user = User.find(params[:id])
    #     if @user.update(user_params)
    #         render json: @user
    #         # @TODO
    #         # render :show
    #     else
    #         # note: cannot do render json: @user.errors.full_messages, status: 422 because @user.update doesnt have any error message
    #         render json: ['invalid'], status:422
    #     end
    # end

    private
    def user_params
        params.require(:user).permit(:username,:email, :password)
    end
end

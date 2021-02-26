class Api::ChannelsController < ApplicationController

    def create 
        # create a new channel
        @channel = Channel.new(channel_params)
        @channel.author_id = current_user.id
        if @channel.save
            render :show
        else
            render json: ["There is an error in creating a channel"], status: 422
        end
    end

    def index
        # debugger
        # give all channels for the current user
        @channels = Channel.all
        render :index
    end


    def show
        @channel = Channel.find(params[:id])  
        render :show
    end
    
    def update
        #update the channel
        # members can add topic etc
        debugger
        @channel = Channel.find(params[:id])
        debugger
        # I added a "lock" that only author_id can update the
        # infor on channels (:name, :status_public, :author_id)
        if @channel.author_id == current_user.id || current_user.username == "demo"
            debugger
            if @channel.update(channel_params)
                render :show
            else
                debugger
                render json: ['Please make sure inputs are not left blank']
            end
        else
            debugger
            render json: ['You are not the author of this channel']
        end
    end
    
    def destroy
        # destroy a channel
        #   here: seeing if you need to place logic here for author id to destroy
        #  
        if @channel = Channel.find(params[:id])
            #  
            @channel.author_id == current_user.id
            @channel.destroy #gotta call destroy 
            #  
            render :show
        else
            render json: ['You are not the author of this channel']
        end
    end

    private
    def channel_params
        #not going to pass in author id
        params.require(:channel).permit(:name, :status_public, :topic, :description) 
    end

end
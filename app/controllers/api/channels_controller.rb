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
        @channels = Channel.all
        render :index
    end


    def show
        @channel = Channel.find(params[:id])  
        render :show
    end
    
    def update
        @channel = Channel.find(params[:id])
        if @channel.update(channel_params)
            render :show
        else
                
            render json: ['Please make sure inputs are not left blank']
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
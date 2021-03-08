class Api::ChannelmembersController < ApplicationController

    def create
        @channelmembers = ChannelMember.new(channel_members_params);
        if @channelmembers.save
            render :show
        else
            render json: ["There was something wrong in adding users to channel"], status: 422
        end
    end
    
    def show
        channel = Channel.find(params[:id]).id
        @channelmembers = ChannelMember.where(:channel_id => channel)
        render :index
    end

    def destroy
        if @channelmembers = ChannelMember.find(params[:id])
            @channelmembers.destroy #gotta call destroy 
            render :show
        else
            render json: ['You cannot remove this channel']
        end
    end

    def channel_members_params
        #not going to pass in author id
        params.require(:channel_members).permit(:user_id, :channel_id) 
    end

end

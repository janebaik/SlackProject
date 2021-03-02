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

    def channel_members_params
        #not going to pass in author id
        params.require(:channel_members).permit(:user_id, :channel_id) 
    end

end

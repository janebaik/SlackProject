class Api::DirectmessagemembersController < ApplicationController

        def create
        @directmembers = DirectMessage.new(channel_members_params);
        if @directmembers.save
            render :show
        else
            render json: ["There was something wrong in adding users to direct message"], status: 422
        end
    end
    


end

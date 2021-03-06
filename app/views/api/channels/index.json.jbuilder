@channels.each do |channel|
    json.set! channel.id do
        # think this is all the info needed for now 
        json.extract! channel, :id, :name, :status_public, :topic, :description, :author_id, :channel_member
    end
end
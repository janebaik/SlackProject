
@channelmembers.each do |channelmembers|
    json.set! channelmembers.id do
        json.extract! channelmembers, :id, :channel_id, :user_id
    end
end
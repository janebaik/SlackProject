# showing ALL users
# debugger
@users.each do |user| 
    json.set! user.id do 
        json.extract! user, :id, :username
        # debugger
    end
end


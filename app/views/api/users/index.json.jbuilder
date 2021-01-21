# showing ALL users
@users.each do |user|
    json.set! user.id do
        json.extract! user, :username, :email
    end
end
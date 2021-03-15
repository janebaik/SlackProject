# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first


User.destroy_all
Channel.destroy_all
ChannelMember.destroy_all
demoUser = User.create!({id: 2, username: 'demo_user', email: 'demo_user@gmail.com', password: 'ilovestars123'})
user_1 = User.create!({id: 3, username: 'Jane', email: 'jane@gmail.com', password: 'ilovestars123'})
user_2 = User.create!({id: 4, username: 'Mona', email: 'mona@gmail.com', password: 'ilovestars123'})
author_1 = User.create!({id: 1, username:"wassap", email:"janefneiaiwefn", password:"afiwjfoiqjfoiejfwe"})


general_1 = Channel.create!({id: 1,name:"General", status_public: true, author_id: 1, topic:"This is the general channel", description:"This is the general channel"})
# general_1 = Channel.create!({id: 2,name:"Private", status_public: false, author_id: 1, topic:"This is the private channel", description:"This is the private channel" })
ChannelMember.create!({id:1, channel_id: 1, user_id:2})
ChannelMember.create!({id:2, channel_id: 1, user_id:3})
ChannelMember.create!({id:3, channel_id: 1, user_id:4})
ChannelMember.create!({id:4, channel_id: 1, user_id:1})



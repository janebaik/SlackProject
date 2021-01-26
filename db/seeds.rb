# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first


User.destroy_all

user_1 = User.create!({username: 'Jane', email: 'jane@gmail.com', password: 'ilovestars123'})
user_1 = User.create!({username: 'Mona', email: 'mona@gmail.com', password: 'ilovestars123'})
# demo_user = User.create!({id: 1, username: 'demo_user@gmail.com', email: 'demo', password: 'demopassword'})

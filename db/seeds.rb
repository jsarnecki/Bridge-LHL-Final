# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.destroy_all
Conversation.destroy_all
Message.destroy_all

@user1 = User.create!(email: 'admin@admin.com', password: '123456')
@user2 = User.create!(email: 'admin2@admin.com', password: '123456')
@user3 = User.create!(email: 'admin3@admin.com', password: '123456')
@user4 = User.create!(email: 'admin4@admin.com', password: '123456')
@user5 = User.create!(email: 'admin5@admin.com', password: '123456')

# @conversation1 =
# 	Conversation.create!(
# 		requester_id: @user1.id,
# 		accepter_id: @user2.id,
# 		title: 'first_friends',
# 	)

@conversation2 =
	Conversation.create!(
		requester_id: @user2.id,
		accepter_id: @user3.id,
		title: 'second_friends',
	)

@conversation3 =
	Conversation.create!(
		requester_id: @user4.id,
		accepter_id: @user5.id,
		title: 'last_friends',
	)

# @conversation1.messages.create!(
# 	sender_id: @user1.id,
# 	receiver_id: @user2.id,
# 	text: 'hey!',
# )

# @conversation1.messages.create!(
# 	sender_id: @user2.id,
# 	receiver_id: @user1.id,
# 	text: 'back at you!',
# )

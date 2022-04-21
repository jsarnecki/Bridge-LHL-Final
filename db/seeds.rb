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
Language.destroy_all
UsersLanguage.destroy_all

# Helper functions
def open_asset(file_name)
	File.open(Rails.root.join('db', 'seed_assets', file_name))
end

@user1 =
	User.create!(
		first_name: 'Yuki',
		last_name: 'Fujiwara',
		email: 'admin@admin.com',
		password: '123456',
		bio:
			'Hi, I am Yuki, I am half Japanese and half Indian. My other first name is Sathvik!',
		image: open_asset('yuki.png'),
	)
@user2 =
	User.create!(
		first_name: 'Josh',
		last_name: 'Sarnecki',
		email: 'admin2@admin.com',
		password: '123456',
		bio: 'Hi, I am Josh! I like snowboarding and learning Korean!',
		image: open_asset('josh.png'),
	)
@user3 =
	User.create!(
		first_name: 'Tony',
		last_name: 'Fu',
		email: 'admin3@admin.com',
		password: '123456',
		bio: 'Hi, I am Tony and I have lived on 3 continents!',
		image: open_asset('tony.png'),
	)
@user4 =
	User.create!(
		first_name: 'andy',
		last_name: 'the GOAT',
		email: 'admin4@admin.com',
		password: '123456',
		bio: 'Hi, I am Andy and I am a teaching wizard',
		image: open_asset('andy.png'),
	)
@user5 =
	User.create!(
		first_name: 'christian',
		last_name: 'nally',
		email: 'admin5@admin.com',
		password: '123456',
		bio: 'Hi, I am Christian and I like physics',
		image: open_asset('christian.png'),
	)
@user6 =
	User.create!(
		first_name: 'gary',
		last_name: 'jipp',
		email: 'admin6@admin.com',
		password: '123456',
		bio: 'Hi, I am Gary and I love Betty White',
		image: open_asset('gary.png'),
	)
@user7 =
	User.create!(
		first_name: 'kelsi',
		last_name: 'camper',
		email: 'admin7@admin.com',
		password: '123456',
		bio: 'Hi, I am Kelsi and I am a bootcamper!',
		image: open_asset('kelsi.png'),
	)
@user8 =
	User.create!(
		first_name: 'pablo',
		last_name: 'camper',
		email: 'admin8@admin.com',
		password: '123456',
		bio: 'Hi, I am Pablo and I am a bootcamper!',
		image: open_asset('pablo.png'),
	)
@user9 =
	User.create!(
		first_name: 'reid',
		last_name: 'bootcamper',
		email: 'admin9@admin.com',
		password: '123456',
		bio: 'Hi, I am Reid and I am a bootcamper!',
		image: open_asset('reid.png'),
	)
@user10 =
	User.create!(
		first_name: 'ryan',
		last_name: 'bootcamper',
		email: 'admin10@admin.com',
		password: '123456',
		bio: 'Hi, I am Ryan and I am a bootcamper!',
		image: open_asset('ryan.png'),
	)
# @conversation1 =
# 	Conversation.create!(
# 		requester_id: @user1.id,
# 		accepter_id: @user2.id,
# 		title: 'first_friends',
# 	)

@language1 = Language.create!(name: 'English')
@language2 = Language.create!(name: 'Korean')
@language3 = Language.create!(name: 'Japanese')
@language4 = Language.create!(name: 'Chinese')
@language5 = Language.create!(name: 'French')
@language6 = Language.create!(name: 'Spanish')
@language7 = Language.create!(name: 'Arabic')
@language8 = Language.create!(name: 'Hindi')

UsersLanguage.create!(
	language_id: @language1.id,
	learning: false,
	user_id: @user1.id,
	skill_level: 5,
)
UsersLanguage.create!(
	language_id: @language3.id,
	learning: false,
	user_id: @user1.id,
	skill_level: 5,
)
UsersLanguage.create!(
	language_id: @language8.id,
	learning: true,
	user_id: @user1.id,
	skill_level: 3,
)

UsersLanguage.create!(
	language_id: @language1.id,
	learning: false,
	user_id: @user2.id,
	skill_level: 5,
)
UsersLanguage.create!(
	language_id: @language2.id,
	learning: true,
	user_id: @user2.id,
	skill_level: 3,
)

UsersLanguage.create!(
	language_id: @language1.id,
	learning: false,
	user_id: @user3.id,
	skill_level: 5,
)
UsersLanguage.create!(
	language_id: @language4.id,
	learning: false,
	user_id: @user3.id,
	skill_level: 5,
)
UsersLanguage.create!(
	language_id: @language5.id,
	learning: true,
	user_id: @user3.id,
	skill_level: 1,
)

UsersLanguage.create!(
	language_id: @language3.id,
	learning: false,
	user_id: @user4.id,
	skill_level: 5,
)
UsersLanguage.create!(
	language_id: @language4.id,
	learning: false,
	user_id: @user4.id,
	skill_level: 2,
)

UsersLanguage.create!(
	language_id: @language4.id,
	learning: false,
	user_id: @user5.id,
	skill_level: 5,
)
UsersLanguage.create!(
	language_id: @language3.id,
	learning: false,
	user_id: @user5.id,
	skill_level: 3,
)

UsersLanguage.create!(
	language_id: @language8.id,
	learning: false,
	user_id: @user6.id,
	skill_level: 5,
)
UsersLanguage.create!(
	language_id: @language1.id,
	learning: false,
	user_id: @user6.id,
	skill_level: 1,
)

UsersLanguage.create!(
	language_id: @language5.id,
	learning: false,
	user_id: @user7.id,
	skill_level: 5,
)
UsersLanguage.create!(
	language_id: @language4.id,
	learning: false,
	user_id: @user7.id,
	skill_level: 2,
)

UsersLanguage.create!(
	language_id: @language8.id,
	learning: false,
	user_id: @user8.id,
	skill_level: 5,
)
UsersLanguage.create!(
	language_id: @language1.id,
	learning: false,
	user_id: @user8.id,
	skill_level: 1,
)

UsersLanguage.create!(
	language_id: @language1.id,
	learning: false,
	user_id: @user9.id,
	skill_level: 5,
)
UsersLanguage.create!(
	language_id: @language8.id,
	learning: false,
	user_id: @user9.id,
	skill_level: 3,
)

UsersLanguage.create!(
	language_id: @language5.id,
	learning: false,
	user_id: @user10.id,
	skill_level: 5,
)
UsersLanguage.create!(
	language_id: @language7.id,
	learning: false,
	user_id: @user10.id,
	skill_level: 4,
)

@conversation2 =
	Conversation.create!(
		requester_id: @user2.id,
		accepter_id: @user3.id,
		title: 'second_friends',
		accepted: false,
		deleted: false,
	)

@conversation3 =
	Conversation.create!(
		requester_id: @user4.id,
		accepter_id: @user5.id,
		title: 'last_friends',
		deleted: false,
		accepted: true,
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

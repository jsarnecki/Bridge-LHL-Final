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

@user1 =
	User.create!(
		first_name: 'John',
		last_name: 'Cena',
		email: 'admin1@admin.com',
		password: '123456',
		bio: '我❤️老干妈',
		image: '/seed_assets/john.png',
	)
@user2 =
	User.create!(
		first_name: 'Thor',
		last_name: 'Odinson',
		email: 'admin2@admin.com',
		password: '123456',
		bio: 'Strongest Avenger',
		image: '/seed_assets/thor.png',
	)
@user3 =
	User.create!(
		first_name: 'Mike',
		last_name: 'Scott',
		email: 'admin3@admin.com',
		password: '123456',
		bio: "I'm not superstitious, but I am a little stitious.",
		image: '/seed_assets/mike.png',
	)
@user4 =
	User.create!(
		first_name: 'Elon',
		last_name: 'Musk',
		email: 'admin4@admin.com',
		password: '123456',
		bio:
			"I am a business 🧲. I build 🚀's and 🚗's. I now also own a little 🐦",
		image: '/seed_assets/elon.png',
	)
@user5 =
	User.create!(
		first_name: 'Groot',
		last_name: 'Groot',
		email: 'admin5@admin.com',
		password: '123456',
		bio: 'I am Groot',
		image: '/seed_assets/groot.png',
	)
@user6 =
	User.create!(
		first_name: 'Mark',
		last_name: 'Zuckerburg',
		email: 'admin6@admin.com',
		password: '123456',
		bio: 'CEO at Meta. Facebook is my ex.',
		image: '/seed_assets/mark.png',
	)
@user7 =
	User.create!(
		first_name: 'Jackie',
		last_name: 'Chan',
		email: 'admin7@admin.com',
		password: '123456',
		bio:
			"Sometimes it takes only one act of kindness and caring to change a person's life.",
		image: '/seed_assets/jackie.png',
	)
@user8 =
	User.create!(
		first_name: 'Jet',
		last_name: 'Li',
		email: 'admin8@admin.com',
		password: '123456',
		bio: "A weapon isn't good for bad, it depends on the one using it",
		image: '/seed_assets/jet.png',
	)
@user9 =
	User.create!(
		first_name: 'Beyonce',
		last_name: 'Knowles',
		email: 'admin9@admin.com',
		password: '123456',
		bio:
			"I don't like to gamble, but if there's one thing I'm willing to bet on, it's myself.",
		image: '/seed_assets/beyonce.png',
	)
@user10 =
	User.create!(
		first_name: 'Bruce',
		last_name: 'Lee',
		email: 'admin10@admin.com',
		password: '123456',
		bio:
			'I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.',
		image: '/seed_assets/bruce.png',
	)
@user11 =
	User.create!(
		first_name: 'Liam',
		last_name: 'Neeson',
		email: 'admin11@admin.com',
		password: '123456',
		bio: 'I will find you',
		image: '/seed_assets/liam.png',
	)
@user12 =
	User.create!(
		first_name: 'Ricky',
		last_name: 'Bobby',
		email: 'admin12@admin.com',
		password: '123456',
		bio: "If you're not first, you're last.",
		image: '/seed_assets/ricky.png',
	)
@user13 =
	User.create!(
		first_name: 'Park',
		last_name: 'Seo-joon',
		email: 'admin13@admin.com',
		password: '123456',
		bio: '그냥 쓰린 밤이 내 삶이 달달했으면 했다',
		image: '/seed_assets/park.png',
	)
@user14 =
	User.create!(
		first_name: 'Ahn',
		last_name: 'Jae-hong',
		email: 'admin14@admin.com',
		password: '123456',
		bio: '',
		image: '/seed_assets/ahn.png',
	)
@user15 =
	User.create!(
		first_name: 'Takehiro',
		last_name: 'Tomiyasu',
		email: 'admin15@admin.com',
		password: '123456',
		bio: 'ラーメン食べたい',
		image: '/seed_assets/takehiro.png',
	)
@user16 =
	User.create!(
		first_name: 'Chun',
		last_name: 'Woo-hee',
		email: 'admin16@admin.com',
		password: '123456',
		bio: '안녕! 천우희입니다!',
		image: '/seed_assets/chun.png',
	)
@user17 =
	User.create!(
		first_name: 'Jeon',
		last_name: 'Yeo-been',
		email: 'admin17@admin.com',
		password: '123456',
		bio: '안녕! 전여빈입니다!',
		image: '/seed_assets/jeon.png',
	)
@user18 =
	User.create!(
		first_name: 'Michael',
		last_name: 'Jordan',
		email: 'admin18@admin.com',
		password: '123456',
		bio: 'And I took that personally',
		image: '/seed_assets/michael.png',
	)
@user19 =
	User.create!(
		first_name: 'Song',
		last_name: 'Joong-ki',
		email: 'admin19@admin.com',
		password: '123456',
		bio: '안녕! 송중기입니다!',
		image: '/seed_assets/song.png',
	)
@user20 =
	User.create!(
		first_name: 'Lee',
		last_name: 'Byung-hun',
		email: 'admin20@admin.com',
		password: '123456',
		bio: '안녕! 이병헌입니다!',
		image: '/seed_assets/lee.png',
	)
@user21 =
	User.create!(
		first_name: 'Tom',
		last_name: 'Segura',
		email: 'admin21@admin.com',
		password: '123456',
		bio:
			"I always like it when I eat myself out of breath. That's a good boost to my day. You know, I'm eating, and I go, 'Oooohhh.' It's better a few moments later when you get to think about it, when you're like, 'Why did I just stop to take a deep breath? Oh yeah, my body also needs air.'",
		image: '/seed_assets/tom.png',
	)
@user22 =
	User.create!(
		first_name: 'Sharukh',
		last_name: ' Khan',
		email: 'admin22@admin.com',
		password: '123456',
		bio: 'Top Bollywood star, look at me!',
		image: '/seed_assets/sharukh.png',
	)

@user23 =
	User.create!(
		first_name: 'Tony',
		last_name: 'Fu',
		email: 'admin23@admin.com',
		password: '123456',
		bio: 'Hi, I am Tony and I have lived on 3 continents!',
		image: '/seed_assets/tony.png',
	)

@language1 = Language.create!(name: 'English')
@language2 = Language.create!(name: 'Korean')
@language3 = Language.create!(name: 'Japanese')
@language4 = Language.create!(name: 'Chinese')
@language5 = Language.create!(name: 'French')
@language6 = Language.create!(name: 'Spanish')
@language7 = Language.create!(name: 'Portuguese')
@language8 = Language.create!(name: 'Hindi')
@language9 = Language.create!(name: 'dummy')
#Tonys

#John Cena
UsersLanguage.create!(
	language_id: @language4.id,
	learning: false,
	user_id: @user1.id,
	skill_level: 5,
)

UsersLanguage.create!(
	language_id: @language1.id,
	learning: true,
	user_id: @user1.id,
	skill_level: 2,
)

# UsersLanguage.create!(
# 	language_id: @language2.id,
# 	learning: true,
# 	user_id: @user1.id,
# 	skill_level: 2,
# )
# UsersLanguage.create!(
# 	language_id: @language3.id,
# 	learning: true,
# 	user_id: @user1.id,
# 	skill_level: 2,
# )
# UsersLanguage.create!(
# 	language_id: @language4.id,
# 	learning: true,
# 	user_id: @user1.id,
# 	skill_level: 2,
# )
# UsersLanguage.create!(
# 	language_id: @language5.id,
# 	learning: true,
# 	user_id: @user1.id,
# 	skill_level: 2,
# )
# UsersLanguage.create!(
# 	language_id: @language6.id,
# 	learning: true,
# 	user_id: @user1.id,
# 	skill_level: 2,
# )
# UsersLanguage.create!(
# 	language_id: @language7.id,
# 	learning: true,
# 	user_id: @user1.id,
# 	skill_level: 2,
# )
# UsersLanguage.create!(
# 	language_id: @language8.id,
# 	learning: true,
# 	user_id: @user1.id,
# 	skill_level: 2,
# )
#Thor

UsersLanguage.create!(
	language_id: @language1.id,
	learning: true,
	user_id: @user2.id,
	skill_level: 2,
)

UsersLanguage.create!(
	language_id: @language6.id,
	learning: true,
	user_id: @user2.id,
	skill_level: 3,
)
UsersLanguage.create!(
	language_id: @language4.id,
	learning: false,
	user_id: @user2.id,
	skill_level: 5,
)
UsersLanguage.create!(
	language_id: @language3.id,
	learning: false,
	user_id: @user2.id,
	skill_level: 5,
)

#Michael Scott
UsersLanguage.create!(
	language_id: @language4.id,
	learning: true,
	user_id: @user3.id,
	skill_level: 1,
)

UsersLanguage.create!(
	language_id: @language3.id,
	learning: true,
	user_id: @user3.id,
	skill_level: 1,
)

UsersLanguage.create!(
	language_id: @language1.id,
	learning: false,
	user_id: @user3.id,
	skill_level: 5,
)

UsersLanguage.create!(
	language_id: @language2.id,
	learning: false,
	user_id: @user3.id,
	skill_level: 5,
)
#Elon Musk

UsersLanguage.create!(
	language_id: @language8.id,
	learning: false,
	user_id: @user4.id,
	skill_level: 5,
)

UsersLanguage.create!(
	language_id: @language7.id,
	learning: true,
	user_id: @user4.id,
	skill_level: 2,
)

UsersLanguage.create!(
	language_id: @language2.id,
	learning: true,
	user_id: @user4.id,
	skill_level: 1,
)

#Groot

UsersLanguage.create!(
	language_id: @language5.id,
	learning: true,
	user_id: @user5.id,
	skill_level: 1,
)

UsersLanguage.create!(
	language_id: @language7.id,
	learning: false,
	user_id: @user5.id,
	skill_level: 4,
)

#Mark Zuckerberg

UsersLanguage.create!(
	language_id: @language2.id,
	learning: true,
	user_id: @user6.id,
	skill_level: 3,
)

UsersLanguage.create!(
	language_id: @language6.id,
	learning: false,
	user_id: @user6.id,
	skill_level: 5,
)

#Jackie Chan

UsersLanguage.create!(
	language_id: @language5.id,
	learning: true,
	user_id: @user7.id,
	skill_level: 2,
)

UsersLanguage.create!(
	language_id: @language2.id,
	learning: false,
	user_id: @user7.id,
	skill_level: 5,
)

#Jet Li

UsersLanguage.create!(
	language_id: @language4.id,
	learning: true,
	user_id: @user8.id,
	skill_level: 1,
)

UsersLanguage.create!(
	language_id: @language3.id,
	learning: true,
	user_id: @user8.id,
	skill_level: 1,
)

UsersLanguage.create!(
	language_id: @language1.id,
	learning: false,
	user_id: @user8.id,
	skill_level: 5,
)

UsersLanguage.create!(
	language_id: @language2.id,
	learning: false,
	user_id: @user8.id,
	skill_level: 5,
)
# Yukis

#Beyonce
UsersLanguage.create!(
	language_id: @language1.id,
	learning: false,
	user_id: @user9.id,
	skill_level: 5,
)

UsersLanguage.create!(
	language_id: @language8.id,
	learning: true,
	user_id: @user9.id,
	skill_level: 2,
)

#Bruce Lee
UsersLanguage.create!(
	language_id: @language1.id,
	learning: false,
	user_id: @user10.id,
	skill_level: 5,
)

UsersLanguage.create!(
	language_id: @language4.id,
	learning: false,
	user_id: @user10.id,
	skill_level: 5,
)

UsersLanguage.create!(
	language_id: @language3.id,
	learning: true,
	user_id: @user10.id,
	skill_level: 2,
)

#Liam Neeson
UsersLanguage.create!(
	language_id: @language1.id,
	learning: false,
	user_id: @user11.id,
	skill_level: 5,
)

UsersLanguage.create!(
	language_id: @language5.id,
	learning: false,
	user_id: @user11.id,
	skill_level: 5,
)

UsersLanguage.create!(
	language_id: @language4.id,
	learning: true,
	user_id: @user11.id,
	skill_level: 2,
)

#Ricky Bobby
UsersLanguage.create!(
	language_id: @language1.id,
	learning: false,
	user_id: @user12.id,
	skill_level: 5,
)

UsersLanguage.create!(
	language_id: @language4.id,
	learning: true,
	user_id: @user12.id,
	skill_level: 3,
)

#Park Seo-joon
UsersLanguage.create!(
	language_id: @language2.id,
	learning: false,
	user_id: @user13.id,
	skill_level: 5,
)

UsersLanguage.create!(
	language_id: @language1.id,
	learning: true,
	user_id: @user13.id,
	skill_level: 1,
)

#Ahn Jae-hong
UsersLanguage.create!(
	language_id: @language7.id,
	learning: false,
	user_id: @user14.id,
	skill_level: 5,
)

UsersLanguage.create!(
	language_id: @language8.id,
	learning: true,
	user_id: @user14.id,
	skill_level: 5,
)

UsersLanguage.create!(
	language_id: @language6.id,
	learning: true,
	user_id: @user14.id,
	skill_level: 2,
)

#Takehiro Tomoiyasu
UsersLanguage.create!(
	language_id: @language1.id,
	learning: false,
	user_id: @user15.id,
	skill_level: 5,
)

UsersLanguage.create!(
	language_id: @language3.id,
	learning: false,
	user_id: @user15.id,
	skill_level: 5,
)

UsersLanguage.create!(
	language_id: @language2.id,
	learning: true,
	user_id: @user15.id,
	skill_level: 2,
)

#Chun Woo-hee
UsersLanguage.create!(
	language_id: @language2.id,
	learning: false,
	user_id: @user16.id,
	skill_level: 5,
)

UsersLanguage.create!(
	language_id: @language4.id,
	learning: false,
	user_id: @user16.id,
	skill_level: 5,
)

UsersLanguage.create!(
	language_id: @language1.id,
	learning: true,
	user_id: @user16.id,
	skill_level: 3,
)

#Jeon Yeo-bin
UsersLanguage.create!(
	language_id: @language2.id,
	learning: false,
	user_id: @user17.id,
	skill_level: 5,
)

UsersLanguage.create!(
	language_id: @language4.id,
	learning: false,
	user_id: @user17.id,
	skill_level: 5,
)

UsersLanguage.create!(
	language_id: @language1.id,
	learning: true,
	user_id: @user17.id,
	skill_level: 3,
)

UsersLanguage.create!(
	language_id: @language6.id,
	learning: true,
	user_id: @user17.id,
	skill_level: 2,
)

#Michael Jordan
UsersLanguage.create!(
	language_id: @language1.id,
	learning: false,
	user_id: @user18.id,
	skill_level: 5,
)

UsersLanguage.create!(
	language_id: @language4.id,
	learning: true,
	user_id: @user18.id,
	skill_level: 3,
)

#Song Joong-ki
UsersLanguage.create!(
	language_id: @language2.id,
	learning: false,
	user_id: @user19.id,
	skill_level: 5,
)

UsersLanguage.create!(
	language_id: @language3.id,
	learning: false,
	user_id: @user19.id,
	skill_level: 5,
)

UsersLanguage.create!(
	language_id: @language1.id,
	learning: true,
	user_id: @user19.id,
	skill_level: 4,
)

UsersLanguage.create!(
	language_id: @language4.id,
	learning: true,
	user_id: @user19.id,
	skill_level: 3,
)

#Lee Byung-hun
UsersLanguage.create!(
	language_id: @language1.id,
	learning: false,
	user_id: @user20.id,
	skill_level: 5,
)

UsersLanguage.create!(
	language_id: @language2.id,
	learning: false,
	user_id: @user20.id,
	skill_level: 5,
)

UsersLanguage.create!(
	language_id: @language4.id,
	learning: true,
	user_id: @user20.id,
	skill_level: 2,
)

UsersLanguage.create!(
	language_id: @language3.id,
	learning: true,
	user_id: @user20.id,
	skill_level: 1,
)

#Tom Segura

UsersLanguage.create!(
	language_id: @language1.id,
	learning: false,
	user_id: @user21.id,
	skill_level: 5,
)

UsersLanguage.create!(
	language_id: @language4.id,
	learning: true,
	user_id: @user21.id,
	skill_level: 3,
)

#Sharukh Kahn
UsersLanguage.create!(
	language_id: @language1.id,
	learning: false,
	user_id: @user22.id,
	skill_level: 5,
)

UsersLanguage.create!(
	language_id: @language8.id,
	learning: false,
	user_id: @user22.id,
	skill_level: 5,
)

UsersLanguage.create!(
	language_id: @language3.id,
	learning: true,
	user_id: @user22.id,
	skill_level: 2,
)

#Tony
UsersLanguage.create!(
	language_id: @language4.id,
	learning: true,
	user_id: @user23.id,
	skill_level: 3,
)

UsersLanguage.create!(
	language_id: @language2.id,
	learning: true,
	user_id: @user23.id,
	skill_level: 4,
)

UsersLanguage.create!(
	language_id: @language1.id,
	learning: false,
	user_id: @user23.id,
	skill_level: 5,
)

UsersLanguage.create!(
	language_id: @language3.id,
	learning: false,
	user_id: @user23.id,
	skill_level: 5,
)

#Conversations

#John Cena to Groot
@conversation1 =
	Conversation.create!(
		requester_id: @user1.id,
		accepter_id: @user5.id,
		deleted: false,
		accepted: true,
		seen: true,
	)

@conversation1.messages.create!(
	sender_id: @user1.id,
	receiver_id: @user5.id,
	text: '我很困惑!',
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

#Elon to John Cena
@conversation2 =
	Conversation.create!(
		requester_id: @user1.id,
		accepter_id: @user4.id,
		deleted: false,
		accepted: true,
		seen: true,
	)

@conversation2.messages.create!(
	sender_id: @user4.id,
	receiver_id: @user1.id,
	text: '🐶 🪙 to 🌙! Funding secured!',
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
) #Groot to Tony

@conversation3 =
	Conversation.create!(
		requester_id: @user5.id,
		accepter_id: @user23.id,
		deleted: false,
		accepted: true,
		seen: true,
	)

@conversation3.messages.create!(
	sender_id: @user23.id,
	receiver_id: @user5.id,
	text: 'Hi Groot!',
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

@conversation3.messages.create!(
	sender_id: @user5.id,
	receiver_id: @user23.id,
	text: '🌱!',
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

@conversation3.messages.create!(
	sender_id: @user23.id,
	receiver_id: @user5.id,
	text: 'How are you doing today?',
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

@conversation3.messages.create!(
	sender_id: @user5.id,
	receiver_id: @user23.id,
	text: '🌱🌱🌱, 🌱?',
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

@conversation3.messages.create!(
	sender_id: @user23.id,
	receiver_id: @user5.id,
	text: 'I am tired from coding.',
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

@conversation3.messages.create!(
	sender_id: @user5.id,
	receiver_id: @user23.id,
	text: '🌱🌱🌱🌱, 🌱🌱🌱🌱🌱',
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

@conversation3.messages.create!(
	sender_id: @user23.id,
	receiver_id: @user5.id,
	text: 'Thank you.',
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

@conversation3.messages.create!(
	sender_id: @user23.id,
	receiver_id: @user5.id,
	text: 'Btw, when is your next movie?',
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)
@conversation3.messages.create!(
	sender_id: @user5.id,
	receiver_id: @user23.id,
	text: '🌱🌱🌱',
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

@conversation3.messages.create!(
	sender_id: @user23.id,
	receiver_id: @user5.id,
	text: 'Oh cool, can you get me tickets?',
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)
@conversation3.messages.create!(
	sender_id: @user5.id,
	receiver_id: @user23.id,
	text: '🌱🌱🌱, 🌱🌱🌱🌱!',
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

#Mark Zuckerburg to John Cena
@conversation4 =
	Conversation.create!(
		requester_id: @user6.id,
		accepter_id: @user1.id,
		deleted: false,
		accepted: true,
		seen: true,
	)

@conversation4.messages.create!(
	sender_id: @user6.id,
	receiver_id: @user1.id,
	text: 'Metaverse at 8?',
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

#Jackie Chan to John Cena
@conversation5 =
	Conversation.create!(
		requester_id: @user7.id,
		accepter_id: @user1.id,
		deleted: false,
		accepted: true,
		seen: true,
	)

@conversation5.messages.create!(
	sender_id: @user7.id,
	receiver_id: @user1.id,
	text: 'I broke another bone yesterday…',
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

#Beyonce to Tony Fu
@conversation6 =
	Conversation.create!(
		requester_id: @user9.id,
		accepter_id: @user23.id,
		deleted: false,
		accepted: true,
		seen: true,
	)

@conversation6.messages.create!(
	sender_id: @user9.id,
	receiver_id: @user23.id,
	text: 'Put a 💍 on it',
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

#Liam Neeson to Tony Fu
@conversation7 =
	Conversation.create!(
		requester_id: @user11.id,
		accepter_id: @user23.id,
		deleted: false,
		accepted: true,
		seen: true,
	)

@conversation7.messages.create!(
	sender_id: @user23.id,
	receiver_id: @user11.id,
	text: 'Hi Liam!',
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

@conversation7.messages.create!(
	sender_id: @user11.id,
	receiver_id: @user23.id,
	text: 'If you are looking for a ransom',
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

@conversation7.messages.create!(
	sender_id: @user23.id,
	receiver_id: @user11.id,
	text: '?',
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

@conversation7.messages.create!(
	sender_id: @user11.id,
	receiver_id: @user23.id,
	text: "I can tell you I don't have money",
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

@conversation7.messages.create!(
	sender_id: @user23.id,
	receiver_id: @user11.id,
	text: "I didn't ask for any...",
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

@conversation7.messages.create!(
	sender_id: @user11.id,
	receiver_id: @user23.id,
	text: 'But what I do have',
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

@conversation7.messages.create!(
	sender_id: @user23.id,
	receiver_id: @user11.id,
	text: 'what?',
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

@conversation7.messages.create!(
	sender_id: @user11.id,
	receiver_id: @user23.id,
	text: 'are a very particular set of skills',
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

@conversation7.messages.create!(
	sender_id: @user23.id,
	receiver_id: @user11.id,
	text: 'Good for you',
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

@conversation7.messages.create!(
	sender_id: @user11.id,
	receiver_id: @user23.id,
	text: 'Skills I have acquired over a very long career',
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

@conversation7.messages.create!(
	sender_id: @user23.id,
	receiver_id: @user11.id,
	text: 'Again, good for you...',
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

@conversation7.messages.create!(
	sender_id: @user11.id,
	receiver_id: @user23.id,
	text: 'Skills that make me a nightmare for people like you',
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

@conversation7.messages.create!(
	sender_id: @user23.id,
	receiver_id: @user11.id,
	text: 'People like me? Excuse me?',
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

@conversation7.messages.create!(
	sender_id: @user11.id,
	receiver_id: @user23.id,
	text: "If you let my daughter go now, that'll be the end of it",
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)
@conversation7.messages.create!(
	sender_id: @user23.id,
	receiver_id: @user11.id,
	text: "I don't have your daughter",
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

@conversation7.messages.create!(
	sender_id: @user11.id,
	receiver_id: @user23.id,
	text: 'I will not look for you. I will not pursue you',
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

@conversation7.messages.create!(
	sender_id: @user23.id,
	receiver_id: @user11.id,
	text: 'Good...',
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

@conversation7.messages.create!(
	sender_id: @user11.id,
	receiver_id: @user23.id,
	text: "But if you don't",
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

@conversation7.messages.create!(
	sender_id: @user23.id,
	receiver_id: @user11.id,
	text: "I don't!",
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

@conversation7.messages.create!(
	sender_id: @user11.id,
	receiver_id: @user23.id,
	text: 'I will look for you, I will find you, and I will kill you',
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

@conversation7.messages.create!(
	sender_id: @user23.id,
	receiver_id: @user11.id,
	text: "Ok, I'm calling the police.",
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

#Ahn Jae-hong  to Tony Fu
@conversation7 =
	Conversation.create!(
		requester_id: @user14.id,
		accepter_id: @user23.id,
		deleted: false,
		accepted: true,
		seen: true,
	)

@conversation7.messages.create!(
	sender_id: @user14.id,
	receiver_id: @user23.id,
	text: '뭐랄까? 그냥 그래.. 무슨 말일지 모르겠는데',
	seen: true,
	initializer: false,
	edit: false,
	new_text: '',
)

# Helper functions
# def open_asset(file_name)
# 	File.open(Rails.root.join('db', 'seed_assets', file_name))
# end

# @user1 =
# 	User.create!(
# 		first_name: 'Yuki',
# 		last_name: 'Fujiwara',
# 		email: 'admin1@admin.com',
# 		password: '123456',
# 		bio:
# 			'Hi, I am Yuki, I am half Japanese and half Indian. My other first name is Sathvik!',
# 		image: '/seed_assets/yuki.png',
# 	)
# @user2 =
# 	User.create!(
# 		first_name: 'Josh',
# 		last_name: 'Sarnecki',
# 		email: 'admin2@admin.com',
# 		password: '123456',
# 		bio: 'Hi, I am Josh! I like snowboarding and learning Korean!',
# 		image: '/seed_assets/josh.png',
# 	)
# @user3 =
# 	User.create!(
# 		first_name: 'Tony',
# 		last_name: 'Fu',
# 		email: 'admin3@admin.com',
# 		password: '123456',
# 		bio: 'Hi, I am Tony and I have lived on 3 continents!',
# 		image: '/seed_assets/tony.png',
# 	)
# @user4 =
# 	User.create!(
# 		first_name: 'andy',
# 		last_name: 'the GOAT',
# 		email: 'admin4@admin.com',
# 		password: '123456',
# 		bio: 'Hi, I am Andy and I am a teaching wizard',
# 		image: '/seed_assets/andy.png',
# 	)
# @user5 =
# 	User.create!(
# 		first_name: 'christian',
# 		last_name: 'nally',
# 		email: 'admin5@admin.com',
# 		password: '123456',
# 		bio: 'Hi, I am Christian and I like physics',
# 		image: '/seed_assets/christian.png',
# 	)
# @user6 =
# 	User.create!(
# 		first_name: 'gary',
# 		last_name: 'jipp',
# 		email: 'admin6@admin.com',
# 		password: '123456',
# 		bio: 'Hi, I am Gary and I love Betty White',
# 		image: '/seed_assets/gary.png',
# 	)
# @user7 =
# 	User.create!(
# 		first_name: 'kelsi',
# 		last_name: 'camper',
# 		email: 'admin7@admin.com',
# 		password: '123456',
# 		bio: 'Hi, I am Kelsi and I am a bootcamper!',
# 		image: '/seed_assets/kelsi.png',
# 	)
# @user8 =
# 	User.create!(
# 		first_name: 'pablo',
# 		last_name: 'camper',
# 		email: 'admin8@admin.com',
# 		password: '123456',
# 		bio: 'Hi, I am Pablo and I am a bootcamper!',
# 		image: '/seed_assets/pablo.png',
# 	)
# @user9 =
# 	User.create!(
# 		first_name: 'reid',
# 		last_name: 'bootcamper',
# 		email: 'admin9@admin.com',
# 		password: '123456',
# 		bio: 'Hi, I am Reid and I am a bootcamper!',
# 		image: '/seed_assets/reid.png',
# 	)
# @user10 =
# 	User.create!(
# 		first_name: 'ryan',
# 		last_name: 'bootcamper',
# 		email: 'admin10@admin.com',
# 		password: '123456',
# 		bio: 'Hi, I am Ryan and I am a bootcamper!',
# 		image: '/seed_assets/ryan.png',
# 	)
# # @conversation1 =
# # 	Conversation.create!(
# # 		requester_id: @user1.id,
# # 		accepter_id: @user2.id,
# # 		title: 'first_friends',
# # 	)

# @language1 = Language.create!(name: 'English')
# @language2 = Language.create!(name: 'Korean')
# @language3 = Language.create!(name: 'Japanese')
# @language4 = Language.create!(name: 'Chinese')
# @language5 = Language.create!(name: 'French')
# @language6 = Language.create!(name: 'Spanish')
# @language7 = Language.create!(name: 'Portuguese')
# @language8 = Language.create!(name: 'Hindi')

# UsersLanguage.create!(
# 	language_id: @language1.id,
# 	learning: false,
# 	user_id: @user1.id,
# 	skill_level: 5,
# )
# UsersLanguage.create!(
# 	language_id: @language3.id,
# 	learning: false,
# 	user_id: @user1.id,
# 	skill_level: 5,
# )
# UsersLanguage.create!(
# 	language_id: @language8.id,
# 	learning: true,
# 	user_id: @user1.id,
# 	skill_level: 3,
# )
# UsersLanguage.create!(
# 	language_id: @language5.id,
# 	learning: true,
# 	user_id: @user1.id,
# 	skill_level: 2,
# )

# UsersLanguage.create!(
# 	language_id: @language1.id,
# 	learning: false,
# 	user_id: @user2.id,
# 	skill_level: 5,
# )
# UsersLanguage.create!(
# 	language_id: @language2.id,
# 	learning: true,
# 	user_id: @user2.id,
# 	skill_level: 3,
# )

# UsersLanguage.create!(
# 	language_id: @language1.id,
# 	learning: false,
# 	user_id: @user3.id,
# 	skill_level: 5,
# )
# UsersLanguage.create!(
# 	language_id: @language4.id,
# 	learning: false,
# 	user_id: @user3.id,
# 	skill_level: 5,
# )
# UsersLanguage.create!(
# 	language_id: @language5.id,
# 	learning: true,
# 	user_id: @user3.id,
# 	skill_level: 1,
# )

# UsersLanguage.create!(
# 	language_id: @language3.id,
# 	learning: false,
# 	user_id: @user4.id,
# 	skill_level: 5,
# )
# UsersLanguage.create!(
# 	language_id: @language4.id,
# 	learning: true,
# 	user_id: @user4.id,
# 	skill_level: 2,
# )

# UsersLanguage.create!(
# 	language_id: @language4.id,
# 	learning: false,
# 	user_id: @user5.id,
# 	skill_level: 5,
# )
# UsersLanguage.create!(
# 	language_id: @language3.id,
# 	learning: true,
# 	user_id: @user5.id,
# 	skill_level: 3,
# )

# UsersLanguage.create!(
# 	language_id: @language8.id,
# 	learning: false,
# 	user_id: @user6.id,
# 	skill_level: 5,
# )
# UsersLanguage.create!(
# 	language_id: @language1.id,
# 	learning: true,
# 	user_id: @user6.id,
# 	skill_level: 1,
# )

# UsersLanguage.create!(
# 	language_id: @language5.id,
# 	learning: false,
# 	user_id: @user7.id,
# 	skill_level: 5,
# )
# UsersLanguage.create!(
# 	language_id: @language4.id,
# 	learning: true,
# 	user_id: @user7.id,
# 	skill_level: 2,
# )

# UsersLanguage.create!(
# 	language_id: @language8.id,
# 	learning: false,
# 	user_id: @user8.id,
# 	skill_level: 5,
# )
# UsersLanguage.create!(
# 	language_id: @language1.id,
# 	learning: true,
# 	user_id: @user8.id,
# 	skill_level: 1,
# )

# UsersLanguage.create!(
# 	language_id: @language1.id,
# 	learning: false,
# 	user_id: @user9.id,
# 	skill_level: 5,
# )
# UsersLanguage.create!(
# 	language_id: @language8.id,
# 	learning: true,
# 	user_id: @user9.id,
# 	skill_level: 3,
# )

# UsersLanguage.create!(
# 	language_id: @language5.id,
# 	learning: false,
# 	user_id: @user10.id,
# 	skill_level: 5,
# )
# UsersLanguage.create!(
# 	language_id: @language7.id,
# 	learning: true,
# 	user_id: @user10.id,
# 	skill_level: 4,
# )

# @conversation2 =
# 	Conversation.create!(
# 		requester_id: @user2.id,
# 		accepter_id: @user3.id,
# 		title: 'second_friends',
# 		accepted: false,
# 		deleted: false,
# 		seen: true,
# 	)

# @conversation3 =
# 	Conversation.create!(
# 		requester_id: @user4.id,
# 		accepter_id: @user5.id,
# 		title: 'last_friends',
# 		deleted: false,
# 		accepted: true,
# 		seen: false,
# 	)

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

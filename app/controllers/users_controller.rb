class UsersController < ApplicationController
	before_action :redirect_if_authenticated, only: %i[create new]

	def index
		@users = User.all
		if @users
			#Adds user_languages information to the user object for sending to client
			users_with_languages =
				@users.map do |user|
					user_languages_with_names =
						user.users_languages.map do |language|
							language_name = Language.find(language.language_id).name
							{
								id: language.id,
								user_id: language.user_id,
								language_id: language.language_id,
								language_name: language_name,
								skill_level: language.skill_level,
								learning: language.learning,
							}
						end

					{ user: user, languages: user_languages_with_names }
				end

			render json: users_with_languages
		else
			render json: { status: 500, errors: ['no users found'] }
		end
	end

	#Not in use
	def show
		@user = User.find(params[:id])
		if @user
			render json: { user: @user, languages: @user.users_languages }
		else
			render json: { status: 500, errors: ['user not found'] }
		end
	end

	#Not in use
	def create
		@user = User.new(user_params)
		if @user.save
			login!
			render json: { status: :created, user: @user }
		else
			render json: { status: 500, errors: @user.errors.full_messages }
		end
	end

	#Not in use
	def new
		@user = User.new
	end

	def user_params
		params.require(:user).permit(:email, :password, :password_confirmation)
	end
end

class UsersLanguagesController < ApplicationController
	def index
		@user = User.find params[:user_id]
		@languages = @user.users_languages
		render json: @languages
	end
end

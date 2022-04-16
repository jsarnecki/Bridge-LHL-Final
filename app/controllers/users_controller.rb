class UsersController < ApplicationController
	before_action :redirect_if_authenticated, only: %i[create new]

	def create
		@user = User.create!(user_params)
	end

	def new
		@user = User.new
	end

	def user_params
		params.require(:user).permit(:email, :password, :password_confirmation)
	end
end

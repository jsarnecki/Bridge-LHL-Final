class UsersController < ApplicationController
	before_action :redirect_if_authenticated, only: %i[create new]

	def index
		@users = User.all
		if @users
			render json: { users: @users }
		else
			render json: { status: 500, errors: ['no users found'] }
		end
	end

	def show
		@user = User.find(params[:id])
		if @user
			render json: { user: @user }
		else
			render json: { status: 500, errors: ['user not found'] }
		end
	end

	def create
		#First tutorial
		# @user = User.create!(user_params)
		@user = User.new(user_params)
		if @user.save
			login!
			render json: { status: :created, user: @user }
		else
			render json: { status: 500, errors: @user.errors.full_messages }
		end
	end

	def new
		@user = User.new
	end

	def user_params
		params.require(:user).permit(:email, :password, :password_confirmation)
	end
end

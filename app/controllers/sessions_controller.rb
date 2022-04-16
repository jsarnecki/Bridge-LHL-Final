class SessionsController < ApplicationController
	before_action :redirect_if_authenticated, only: %i[create new]
	before_action :authenticate_user!, only: [:destroy]

	def create
		@user = User.find_by(email: params[:email].downcase)
		if @user.authenticate(params[:password])
			login @user
		else
			raise 'Error logging in'
		end
	end

	def destroy
		logout
		redirect_to root_path, notice: 'Signed out.'
	end

	def new; end
end

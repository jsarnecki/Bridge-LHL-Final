class SessionsController < ApplicationController
	#first tutorial
	# before_action :redirect_if_authenticated, only: %i[create new]
	# before_action :authenticate_user!, only: [:destroy]
	# def create
	# 	@user = User.find_by(email: params[:email].downcase)
	# 	if @user.authenticate(params[:password])
	# 		login @user
	# 	else
	# 		raise 'Error logging in'
	# 	end
	# end
	# def destroy
	# 	logout
	# 	redirect_to root_path, notice: 'Signed out.'
	# end
	# def new; end

	def create
		@user = User.find_by(email: session_params[:email])

		if @user && @user.authenticate(session_params[:password])
			login!
			render json: { logged_in: true, user: @user }
		else
			render json: { status: 401, errors: ['no such user, please try again'] }
		end
	end
	def is_logged_in?
		if logged_in? && current_user
			render json: { logged_in: true, user: current_user }
		else
			render json: { logged_in: false, message: 'no such user' }
		end
	end
	def destroy
		logout!
		render json: { status: 200, logged_out: true }
	end

	private

	def session_params
		params.require(:user).permit(:email, :password)
	end
end

class User < ApplicationRecord
	# CONFIRMATION_TOKEN_EXPIRATION = 10.minutes

	has_secure_password

	before_save :downcase_email

	validates :email,
	          format: {
			with: URI::MailTo::EMAIL_REGEXP,
	          },
	          presence: true,
	          uniqueness: true

	has_many :requested_friendships,
	         foreign_key: :requester_id,
	         class_name: 'Conversation'

	has_many :accepters, through: :requested_friendships

	has_many :accepted_friendships,
	         foreign_key: :accepter_id,
	         class_name: 'Conversation'

	has_many :requesters, through: :accepted_friendships

	has_many :users_languages
	has_many :languages, through: :users_languages

	# def confirm!
	#   update_columns(confirmed_at: Time.current)
	# end

	# def confirmed?
	#   confirmed_at.present?
	# end

	# def generate_confirmation_token
	#   signed_id expires_in: CONFIRMATION_TOKEN_EXPIRATION, purpose: :confirm_email
	# end

	# def unconfirmed?
	#   !confirmed?
	# end

	private

	def downcase_email
		self.email = email.downcase
	end
end

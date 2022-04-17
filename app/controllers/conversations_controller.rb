class ConversationsController < ApplicationController
	def index
		# conversations = Conversation.all
		requested_friendships = current_user.requested_friendships

		accepted_friendships = current_user.accepted_friendships

		all_friendships = requested_friendships + accepted_friendships

		requesters = current_user.requesters
		accepters = current_user.accepters

		all_friends = requesters + accepters

		# render json: { friendships: all_friendships, friends: all_friends }
		# render json: all_friends
		render json: all_friendships
	end

	def create
		conversation = Conversation.new(conversation_params)
		if conversation.save
			serialized_data =
				ActiveModelSerializers::Adapter::Json.new(
					ConversationSerializer.new(conversation),
				).serializable_hash

			ActionCable.server.broadcast(
				# 'conversations_channel',
				"current_user_#{current_user.id}",
				serialized_data,
			)
			head :ok
		end
	end

	private

	def conversation_params
		params.require(:conversation).permit(:title, :requester_id, :accepter_id)
	end
end

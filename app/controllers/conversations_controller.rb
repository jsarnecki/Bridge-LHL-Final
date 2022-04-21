class ConversationsController < ApplicationController
	def index
		# conversations = Conversation.all
		return render json: [] if !current_user

		requested_friendships = current_user.requested_friendships

		accepted_friendships = current_user.accepted_friendships

		all_friendships = requested_friendships + accepted_friendships

		requesters = current_user.requesters
		accepters = current_user.accepters

		all_friends = requesters + accepters

		filtered_friends =
			all_friends.filter { |friend| friend.id != current_user.id }

		all_messages =
			all_friendships.map do |friendship|
				if friendship.requester_id == current_user.id
					friend_id = friendship.accepter_id
				else
					friend_id = friendship.requester_id
				end
				friend = User.find(friend_id)

				messages = friendship.messages
				{
					id: friendship.id,
					friend_id: friend_id,
					friend_first_name: friend.first_name,
					friend_last_name: friend.last_name,
					accepted: friendship.accepted,
					deleted: friendship.deleted,
					requester_id: friendship.requester_id,
					accepter_id: friendship.accepter_id,
					messages: messages,
				}
			end

		# render json: { friendships: all_friendships, friends: all_friends }
		# render json: all_friends
		render json: all_messages
	end

	def create
		conversation =
			Conversation.new(
				{ **conversation_params, accepted: false, deleted: false },
			)
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

			ActionCable.server.broadcast(
				# Broadcast to user/receiver private channel
				"current_user_#{params['accepter_id']}",
				serialized_data,
			)
			head :ok
		end
	end

	def destroy
		conversation = Conversation.find(params[:id])
		conversation.deleted = true
		if current_user.id != conversation.requester_id &&
				current_user.id != conversation.accepter_id
			conversation.deleted = false
		end
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

			ActionCable.server.broadcast(
				# Broadcast to user/receiver private channel
				"current_user_#{params['accepter_id']}",
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

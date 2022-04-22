class MessagesController < ApplicationController
	def create
		message = Message.new({ **message_params, seen: false, initializer: false })
		conversation = Conversation.find(message_params[:conversation_id])
		conversation.seen = false
		if message.save && conversation.save
			# conversation_serialized_data =
			# 	ActiveModelSerializers::Adapter::Json.new(
			# 		ConversationSerializer.new(conversation),
			# 	).serializable_hash

			# ActionCable.server.broadcast(
			# 	# Broadcast to accepter private channel
			# 	"current_user_#{conversation.accepter_id}",
			# 	{ **conversation_serialized_data, action: 'seen' },
			# )

			# ActionCable.server.broadcast(
			# 	# Broadcast to requester private channel
			# 	"current_user_#{conversation.requester_id}",
			# 	{ **conversation_serialized_data, action: 'seen' },
			# )

			serialized_data =
				ActiveModelSerializers::Adapter::Json.new(
					MessageSerializer.new(message),
				).serializable_hash
			MessagesChannel.broadcast_to conversation, serialized_data
			head :ok
		end
	end

	private

	def message_params
		params
			.require(:message)
			.permit(:text, :conversation_id, :sender_id, :receiver_id)
	end
end

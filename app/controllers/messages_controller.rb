class MessagesController < ApplicationController
	def create
		#Creates a new unseen non-initializer (not request or accept request) message
		message = Message.new({ **message_params, seen: false, initializer: false })

		#Sets conversation to not seen as well
		conversation = Conversation.find(message_params[:conversation_id])
		conversation.seen = false

		if message.save && conversation.save
			# Sends cable to that conversation channel
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

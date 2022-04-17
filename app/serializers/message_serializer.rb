class MessageSerializer < ActiveModel::Serializer
	attributes :id, :conversation_id, :text, :created_at, :sender_id, :receiver_id
end

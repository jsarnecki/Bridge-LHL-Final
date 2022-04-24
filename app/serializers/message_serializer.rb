class MessageSerializer < ActiveModel::Serializer
	attributes :id,
	           :conversation_id,
	           :text,
	           :created_at,
	           :sender_id,
	           :receiver_id,
	           :seen,
	           :initializer,
	           :edit,
	           :new_text
end

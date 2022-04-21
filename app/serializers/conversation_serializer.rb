class ConversationSerializer < ActiveModel::Serializer
	attributes :id,
	           :title,
	           :requester_id,
	           :accepter_id,
	           :requester,
	           :accepter,
	           :accepted,
	           :deleted
	has_many :messages
end

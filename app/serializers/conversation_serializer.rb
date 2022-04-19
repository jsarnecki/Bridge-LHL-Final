class ConversationSerializer < ActiveModel::Serializer
	attributes :id, :title, :requester_id, :accepter_id
	has_many :messages
end

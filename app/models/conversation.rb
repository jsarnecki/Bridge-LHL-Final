class Conversation < ApplicationRecord
	has_many :messages
	belongs_to :requester, class_name: 'User'
	belongs_to :accepter, class_name: 'User'

	validates_uniqueness_of :requester, scope: [:accepter]
end

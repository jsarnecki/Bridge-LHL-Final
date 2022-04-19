class FriendshipsController < ApplicationController
	def index
		requesters = current_user.requesters
		accepters = current_user.accepters

		all_friends = requesters + accepters

		filtered_friends =
			all_friends.filter { |friend| friend.id != current_user.id }

		# render json: { friendships: all_friendships, friends: all_friends }
		render json: filtered_friends.map { |friend| [friend.id, friend] }.to_h
	end
end

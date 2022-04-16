class RoomsController < ApplicationController
	def index
		rooms = Room.all
		render json: rooms
	end

	def create
		if Room.find_by(name: params[:name]) === nil
			room = Room.create(room_params)
		else
			room = Room.find_by(name: params[:name])
		end

		ActionCable.server.broadcast 'rooms_channel', room
	end
end

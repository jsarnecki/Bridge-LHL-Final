class CreateConversations < ActiveRecord::Migration[7.0]
	def change
		create_table :conversations do |t|
			t.string :title
			t.integer :requester_id, foreign_key: true
			t.integer :accepter_id, foreign_key: true

			t.timestamps
		end
	end
end

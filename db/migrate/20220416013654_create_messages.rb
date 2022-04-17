class CreateMessages < ActiveRecord::Migration[7.0]
	def change
		create_table :messages do |t|
			t.string :text
			t.references :conversation, null: false, foreign_key: true
			t.integer :sender_id, foreign_key: true
			t.integer :receiver_id, foreign_key: true

			t.timestamps
		end
	end
end

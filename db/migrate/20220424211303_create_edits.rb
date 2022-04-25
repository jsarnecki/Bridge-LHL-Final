class CreateEdits < ActiveRecord::Migration[7.0]
	def change
		create_table :edits do |t|
			t.references :message, null: false, foreign_key: true
			t.timestamps
		end
	end
end

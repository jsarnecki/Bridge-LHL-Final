class CreateUsersLanguages < ActiveRecord::Migration[7.0]
	def change
		create_table :users_languages do |t|
			t.belongs_to :user
			t.belongs_to :language
			t.integer :skill_level
			t.timestamps
		end
		add_column :users_languages, :learning, :boolean
	end
end

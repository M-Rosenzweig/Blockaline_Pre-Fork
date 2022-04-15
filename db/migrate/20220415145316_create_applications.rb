class CreateApplications < ActiveRecord::Migration[7.0]
  def change
    create_table :applications do |t|
      t.boolean :accepted
      t.references :seeker, null: false, foreign_key: true
      t.references :job, null: false, foreign_key: true

      t.timestamps
    end
  end
end

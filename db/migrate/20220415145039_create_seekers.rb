class CreateSeekers < ActiveRecord::Migration[7.0]
  def change
    create_table :seekers do |t|
      t.string :name
      t.string :email
      t.string :profession
      t.boolean :resume

      t.timestamps
    end
  end
end

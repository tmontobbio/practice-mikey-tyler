class CreateShifts < ActiveRecord::Migration[7.0]
  def change
    create_table :shifts do |t|
      t.integer :day
      t.string :start_at
      t.string :end_at
      t.integer :duration
      t.string :role
      t.string :color
      t.integer :employee_id

      t.timestamps
    end
  end
end

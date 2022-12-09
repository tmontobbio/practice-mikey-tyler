class Employee < ApplicationRecord
  has_many :shifts

  def self.first_name
    self.all.sort_by(&:first_name)
  end

  def self.last_name
    self.all.sort_by(&:last_name)
  end
end

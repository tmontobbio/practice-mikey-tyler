class EmployeeSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :shifts
  has_many :shifts
end

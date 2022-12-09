class ShiftsController < ApplicationController
  def index
    render json: Employee.first_name, status: :ok
  end

  def show
    render json: Employee.last_name, status: :ok
  end
end

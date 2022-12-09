class ShiftsController < ApplicationController
  def index
    render json: Employee.all, status: :ok
  end
end

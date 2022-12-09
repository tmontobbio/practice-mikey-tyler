Employee.create(first_name: "Alfred", last_name: "Brown")
Employee.create(first_name: "Tim", last_name: "Cannady")
Employee.create(first_name: "Jeff", last_name: "Auston")

# Alfred
Shift.create(day: 0, start_at: "12pm", end_at: "5pm", duration: 5, role: "Server", color: "red", employee_id: 1)
Shift.create(day: 1, start_at: "9am", end_at: "12pm", duration: 3, role: "Host", color: "green", employee_id: 1)
Shift.create(day: 3, start_at: "9am", end_at: "4pm", duration: 7, role: "Server", color: "red", employee_id: 1)
Shift.create(day: 5, start_at: "9am", end_at: "2pm", duration: 5, role: "Host", color: "green", employee_id: 1)

#Tim
Shift.create(day: 0, start_at: "11am", end_at: "6pm", duration: 7, role: "Chef", color: "orange", employee_id: 2)
Shift.create(day: 1, start_at: "9am", end_at: "3pm", duration: 6, role: "Dishwasher", color: "purple", employee_id: 2)
Shift.create(day: 2, start_at: "9am", end_at: "1pm", duration: 4, role: "Chef", color: "orange", employee_id: 2)
Shift.create(day: 5, start_at: "9pm", end_at: "4am", duration: 7, role: "Dishwasher", color: "purple", employee_id: 2)

# Jeff
Shift.create(day: 1, start_at: "11am", end_at: "6pm", duration: 7, role: "Chef", color: "orange", employee_id: 3)
Shift.create(day: 2, start_at: "9am", end_at: "3pm", duration: 6, role: "Dishwasher", color: "purple", employee_id: 3)
Shift.create(day: 4, start_at: "9am", end_at: "1pm", duration: 4, role: "Chef", color: "orange", employee_id: 3)
Shift.create(day: 6, start_at: "9am", end_at: "4pm", duration: 7, role: "Dishwasher", color: "purple", employee_id: 3)

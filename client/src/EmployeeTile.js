import "./App.css";

export default function EmployeeTile({ i, e }) {
	return (
		<div className="employee" key={i}>
			{e.name}
			{e.shifts.map((s, i) => {
				return (
					<div className="shift" key={i}>
						<ul>
							<li>Day: {s.day}</li>
							<li>
								Shift: {s.start_at} - {s.end_at}
							</li>
							<li>Duration: {s.duration}</li>
							<li>Role: {s.role}</li>
							<li>Color: {s.color}</li>
						</ul>
					</div>
				);
			})}
		</div>
	);
}

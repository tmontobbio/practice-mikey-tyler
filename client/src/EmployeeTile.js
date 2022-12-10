import "./App.css";
import Shift from "./Shift";
import { useState } from "react";

export default function EmployeeTile({ e }) {
	let sundayFilter = e.shifts.filter((s) => s.day === 0);
	const [sunday, setSunday] = useState(sundayFilter[0]);
	// const shifts = e.shifts.map((s, i) => {
	// 	return <Shift key={i + "shift-tile"} s={s} />;
	// });

	const shifts = e.shifts.map((s, i) => {
		return (
			<div className="shift">
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
	});

	// trying to read sunday.day before rendered
	console.log(sunday.day);

	return (
		<div className="employee-tile">
			<div className="name-container">
				<p>
					{e.first_name} {e.last_name}
				</p>
			</div>
			<div className="day"></div>
			<div className="day">Monday</div>
			<div className="day">tuesday</div>
			<div className="day">Wednesday</div>
			<div className="day">Thursday</div>
			<div className="day">Friday</div>
			<div className="day">Saturday</div>
		</div>
	);
}

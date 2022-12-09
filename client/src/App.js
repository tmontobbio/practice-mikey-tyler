import "./App.css";
import { useState, useEffect } from "react";

function App() {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		fetch("/shifts").then((r) => {
			r.json().then((r) => setEmployees(r));
		});
	}, []);

	const employeeList = employees.map((e, i) => {
		console.log(e);
		return (
			<div className="employee-row" key={i}>
				{e.name}
				{e.shifts.map((s) => {
					return (
						<div>
							<ul>
								<li>{s.day}</li>
								<li>
									{s.start_at} - {s.end_at}
								</li>
							</ul>
						</div>
					);
				})}
			</div>
		);
	});

	return <div className="App">{employeeList}</div>;
}

export default App;

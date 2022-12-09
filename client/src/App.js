import "./App.css";
import EmployeeTile from "./EmployeeTile";
import { useState, useEffect } from "react";

function App() {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		fetch("/shifts").then((r) => {
			r.json().then((r) => setEmployees(r));
		});
	}, []);

	const employeeList = employees.map((e, i) => {
		return (
			<div>
				<EmployeeTile e={e} i={i} />
			</div>
		);
	});

	return <div className="App">{employeeList}</div>;
}

export default App;

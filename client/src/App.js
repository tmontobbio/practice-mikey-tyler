import "./App.css";
import EmployeeTile from "./EmployeeTile";
import { useState, useEffect } from "react";

function App() {
	const [employees, setEmployees] = useState([]);
	const [sortMode, setSortMode] = useState("");

	useEffect(() => {
		fetch("/shifts").then((r) => {
			r.json().then((r) => setEmployees(r));
		});
	}, []);

	function handleChange(e) {
		setSortMode(e);
		{
			sortMode == "last_name"
				? fetch("/shifts").then((r) => {
						r.json()
							.then((r) => setEmployees(r))
							.then(console.log("first_name"));
				  })
				: fetch("/shifts/last").then((r) => {
						r.json()
							.then((r) => setEmployees(r))
							.then(console.log("last_name"));
				  });
		}
	}

	const employeeList = employees.map((e, i) => {
		return (
			<div id="tile-container">
				<EmployeeTile e={e} i={i} key={i + "employee-tile"} />
			</div>
		);
	});

	return (
		<div className="App">
			<label for="sort">Sort By </label>
			<select
				name="sort"
				id="sort-list"
				onChange={(e) => handleChange(e.target.value)}
			>
				<option value="first_name">First Name</option>
				<option value="last_name">Last Name</option>
			</select>
			{employeeList}
		</div>
	);
}

export default App;

import "./App.css";
import Shift from "./Shift";

export default function EmployeeTile({ e }) {
	return (
		<div className="employee-tile">
			<div className="name-container">
				<p>
					{e.first_name} {e.last_name}
				</p>
			</div>
			{e.shifts.map((s, i) => {
				return <Shift key={i + "shift-tile"} s={s} />;
			})}
		</div>
	);
}

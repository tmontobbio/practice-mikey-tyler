export default function Shift({ s }) {
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
}

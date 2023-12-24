const Panel = ({ title, children, active, onActive }) => {
	console.log(active,onActive);
	return (
		<section className="panel">
			<h3>{title}</h3>
			{!active ? (
				<button
					onClick={onActive}
				>
					더보기
				</button>
			) : (
				<div>{children}</div>
			)}
		</section>
	);
};
export default Panel;

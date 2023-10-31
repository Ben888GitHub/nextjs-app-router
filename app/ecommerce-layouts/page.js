const ECommercePage = () => {
	return (
		<div className="prose prose-sm prose-invert max-w-none">
			<h1 className="text-xl font-bold">Layouts</h1>

			<ul>
				<li>
					A layout is UI that is shared between multiple pages. On navigation,
					layouts preserve state, remain interactive, and do not re-render. Two
					or more layouts can also be nested.
				</li>
				<li>Try navigating between categories and sub categories.</li>
			</ul>
		</div>
	);
};

export default ECommercePage;

import { dataWithSections } from '../utils/dataWithSections';

export default function SectionalCards() {
	return (
		<div className="space-y-8 ">
			<h1 className="text-xl font-medium text-gray-300">Examples</h1>

			<div className="space-y-10 text-white ">
				{dataWithSections.map((section) => {
					return (
						<div key={section.name} className="space-y-5 ">
							<div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
								{section.name}
							</div>

							<div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
								{section.items.map((item) => (
									<CardGroups key={item.name} {...item} />
								))}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

function CardGroups({ name, description }) {
	return (
		<div className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800 ring-4 ring-transparent hover:ring-blue-500 hover:scale-105 transition-all duration-200">
			<p className="font-medium text-gray-200 group-hover:text-gray-50">
				{name}
			</p>

			{description ? (
				<p className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">
					{description}
				</p>
			) : null}
		</div>
	);
}

'use client';

import Link from 'next/link';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';

const ECommerceTab = ({ path, parallelRoutesKey, items }) => {
	return (
		<div className="flex flex-wrap items-center gap-2">
			{items.map((item) => (
				<Tab
					key={path + item.slug}
					item={item}
					path={path}
					parallelRoutesKey={parallelRoutesKey}
				/>
			))}
		</div>
	);
};

export default ECommerceTab;

function Tab({ path, parallelRoutesKey, item }) {
	const href = item.slug ? path + '/' + item.slug : path;
	const segment = useSelectedLayoutSegment(parallelRoutesKey);
	const pathname = usePathname();

	const isActive =
		// Example home pages e.g. `/layouts`
		(!item.slug && segment === null) ||
		segment === item.segment ||
		// Nested pages e.g. `/layouts/electronics`
		segment === item.slug;

	const variants = `${
		isActive
			? 'bg-blue-500 text-white'
			: 'bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-white'
	} p-3 rounded-lg`;

	return (
		<Link href={href} className={variants}>
			{item.text}
		</Link>
	);
}

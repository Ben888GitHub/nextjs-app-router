import Link from 'next/link';

const dashboardTabs = [
	{
		tab: 'Home',
		route: '/dashboard'
	},
	{
		tab: 'Products',
		route: '/dashboard/products'
	},
	{
		tab: 'Account',
		route: '/dashboard/account'
	}
];

const DashboardSidebar = () => {
	return (
		<ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 mb-5">
			{dashboardTabs.map(({ tab, route }) => (
				<li key={route} className="mr-2">
					<Link
						href={route}
						className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
						aria-current="page"
					>
						{tab}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default DashboardSidebar;

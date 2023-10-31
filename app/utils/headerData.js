const headerNav = [
	{
		href: '/',
		value: 'Home'
	},
	{
		href: '/about',
		value: 'About'
	},
	{
		href: '/about/team',
		value: 'Nested Dynamic Import'
	},
	{
		href: '/code/repos',
		value: 'Code Repos'
	},
	{
		href: '/dashboard',
		value: 'Sample Dashboard Layout'
	},
	{
		href: '/users',
		value: 'Parallel Data Fetching in RSC'
	},
	{
		href: '/tasks',
		value: 'With generateStaticParams()'
	},
	{
		href: '/image-optimization',
		value: 'Image Optimization'
	},
	{
		href: '/protected-route',
		value: 'Protected Route Example'
	},
	{
		href: '/data-with-sections',
		value: 'Data with Sections'
	},
	{
		href: '/ecommerce-layouts',
		value: 'Layouts Filter Examples'
	}
];

const variants = {
	homeClass:
		'block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white',
	navClass:
		'block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
};

export { headerNav, variants };

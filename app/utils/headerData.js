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
		value: 'Nested Route'
	},
	{
		href: '/code/repos',
		value: 'Code Repos'
	},
	{
		href: '/tasks',
		value: 'Tasks'
	}
];

const variants = {
	homeClass:
		'block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white',
	navClass:
		'block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
};

export { headerNav, variants };
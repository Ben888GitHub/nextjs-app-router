// * https://blog.webdevsimplified.com/2024-01/next-js-app-router-cache/
export const fetchRepos = async () => {
	// * SSG with force-cache
	const response = await fetch(
		'https://api.github.com/users/bradtraversy/repos',
		{
			cache: 'no-store'
		}
	);

	// await new Promise((resolve) => setTimeout(resolve, 500));

	const repos = await response.json();
	// console.log(repos);
	return repos;
};

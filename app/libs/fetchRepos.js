export const fetchRepos = async () => {
	// * SSG with force-cache
	const response = await fetch(
		'https://api.github.com/users/bradtraversy/repos',
		{ cache: 'force-cache' }
	);

	await new Promise((resolve) => setTimeout(resolve, 1000));

	const repos = await response.json();
	return repos;
};

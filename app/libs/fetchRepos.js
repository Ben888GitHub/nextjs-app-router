export const fetchRepos = async () => {
	// * SSG with force-cache
	const response = await fetch(
		'https://api.github.com/users/bradtraversy/repos'
	);

	// await new Promise((resolve) => setTimeout(resolve, 500));

	const repos = await response.json();
	// console.log(repos);
	return repos;
};

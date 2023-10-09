import RepoCount from './RepoCount';

const fetchRepo = async (repoName) => {
	// * ISR if revalidate
	const response = await fetch(
		`https://api.github.com/repos/bradtraversy/${repoName}`,
		{
			next: {
				revalidate: 60
			}
		}
	);

	const repo = await response.json();

	return repo;
};

const Repo = async ({ repoName }) => {
	const { description, ...count } = await fetchRepo(repoName);

	return (
		<>
			<p className="mt-3 mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
				{repoName}
			</p>
			<p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
				{description}
			</p>
			<RepoCount {...count} />
		</>
	);
};

export default Repo;

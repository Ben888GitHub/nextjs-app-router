import Link from 'next/link';

// * Caching and Revalidating if the data you fetch can change often
// * https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating
// * https://vercel.com/blog/nextjs-app-router-data-fetching

const fetchRepoContents = async (repoName) => {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	// * ISR
	const response = await fetch(
		`https://api.github.com/repos/bradtraversy/${repoName}/contents`,
		{
			next: {
				revalidate: 60
			}
		}
	);

	const contents = await response.json();
	console.log(contents);
	return contents;
};

const RepoDirs = async ({ repoName }) => {
	const contents = await fetchRepoContents(repoName);

	const dirs = contents.filter((content) => content.type === 'dir');

	return (
		<>
			<p className="text-2xl mt-3">Directories:</p>

			<ul className="mt-1">
				{dirs.map((dir) => (
					<li key={dir.sha}>
						<span className="text-lg mr-1">-</span>
						<Link
							className="hover:underline text-lg"
							href={`/code/repos/${repoName}/${dir.path}`}
						>
							{dir.path}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default RepoDirs;

import RepoCount from '@/app/components/RepoCount';
import SearchFilter from '@/app/components/SearchFilter';
import Link from 'next/link';

// * https://adhithiravi.medium.com/the-yin-and-yang-of-next-js-13-understanding-server-components-and-server-side-rendering-6a9b774c3b06
const fetchRepos = async () => {
	// * SSG with force-cache
	const response = await fetch(
		'https://api.github.com/users/bradtraversy/repos',
		{ cache: 'force-cache' }
	);

	await new Promise((resolve) => setTimeout(resolve, 1000));

	const repos = await response.json();
	return repos;
};

const CodeRepos = async ({ searchParams }) => {
	const repos = await fetchRepos();

	const filteredRepos = repos.filter(({ name }) =>
		searchParams.search
			? name.toLowerCase().includes(searchParams.search.toLowerCase())
			: name
	);

	return (
		<div>
			<p className="text-3xl mb-3">Code Repositories</p>
			{/* <p className="text-xl mb-7">List:</p> */}
			<SearchFilter searchParams={searchParams} pageRoute={`/code/repos`} />

			{filteredRepos.map(
				({
					id,
					name,
					description,

					...count
				}) => (
					<div
						key={id}
						className="text-center max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5"
					>
						<Link
							// prefetch={false}
							href={`repos/${name}`}
							className="hover:underline mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
						>
							{name}
						</Link>

						<p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
							{description}
						</p>
						<RepoCount {...count} />
					</div>
				)
			)}
		</div>
	);
};

export default CodeRepos;

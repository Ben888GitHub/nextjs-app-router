import RepoCount from '@/app/components/RepoCount';
import SearchFilter from '@/app/components/SearchFilter';
import { fetchRepos } from '@/app/libs/fetchRepos';
import Link from 'next/link';

// * https://adhithiravi.medium.com/the-yin-and-yang-of-next-js-13-understanding-server-components-and-server-side-rendering-6a9b774c3b06

const CodeRepos = async ({ searchParams }) => {
	const repos = await fetchRepos();

	const filteredRepos = repos.filter(({ name }) =>
		searchParams.search
			? name.toLowerCase().includes(searchParams.search.toLowerCase())
			: name
	);

	return (
		<div>
			<p className="text-3xl mb-3" role="heading" aria-level="1">
				Code Repositories
			</p>
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
						className="text-center max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5 ring-4 ring-transparent hover:ring-blue-500 hover:scale-105 transition-all duration-200 "
					>
						<Link
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

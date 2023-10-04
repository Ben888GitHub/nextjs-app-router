import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

const fetchRepo = async (repoName) => {
	// * ISR
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
	const { description, stargazers_count, forks_count, watchers_count } =
		await fetchRepo(repoName);

	return (
		<>
			<p className="mt-3 mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
				{repoName}
			</p>
			<p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
				{description}
			</p>
			<div className="flex w-full ">
				<span className="items-center mx-auto flex">
					{' '}
					<FaStar className="mr-1" /> {stargazers_count}
				</span>
				<span className="items-center mx-auto flex">
					{' '}
					<FaCodeBranch className="mr-1" /> {forks_count}
				</span>
				<span className="items-center flex mx-auto">
					{' '}
					<FaEye className="mr-1" /> {watchers_count}
				</span>
			</div>
		</>
	);
};

export default Repo;

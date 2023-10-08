// * Dynamic Routes / Pages
// * https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes

import Repo from '@/app/components/Repo';
import RepoDirs from '@/app/components/RepoDirs';
import Link from 'next/link';
import { Suspense } from 'react';

const RepoName = ({ params }) => {
	console.log(params);

	return (
		<>
			<div className="lg:w-3/12 md:w-full w-full  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5">
				<Link href="/code/repos" className=" hover:underline">
					Back to Repositories
				</Link>
				<Repo repoName={params.repoName} />
				<Suspense fallback={<p className="xl mt-3">Loading directories...</p>}>
					<RepoDirs repoName={params.repoName} />
				</Suspense>
			</div>
		</>
	);
};

export default RepoName;

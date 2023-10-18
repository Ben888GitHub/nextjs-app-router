import { getHealthData } from '../libs/getHealthData';
import { getVueData } from '../libs/getVueData';

// * Parallel Data Fetching in RSC: https://youtu.be/-Sj05H2AuW8?si=xfUgxj8JLz94RrlO&t=1578
// * https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#parallel-data-fetching

const UsersData = async () => {
	const healthData = await getHealthData();
	const vueData = await getVueData();

	const [healthResult, vueResult] = await Promise.all([healthData, vueData]);

	return (
		<>
			<ResultData {...healthResult.story} />
			<ResultData {...vueResult.story} />
		</>
	);
};

export const ResultData = ({ name, lang, first_published_at, id }) => {
	return (
		<>
			<p
				role="heading"
				aria-level={id}
				className="mt-1 mb-2 lg:text-2xl md:text-2xl text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
			>
				{name}
			</p>
			<p className="lg:text-lg md:text-lg text-md mb-3 font-normal text-gray-500 dark:text-gray-400">
				{lang}
			</p>

			<p className="mb-6 font-normal text-gray-500 dark:text-gray-400">
				{first_published_at}
			</p>
		</>
	);
};

export default UsersData;

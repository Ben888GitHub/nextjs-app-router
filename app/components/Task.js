import Link from 'next/link';

const Task = ({ id, title }) => {
	return (
		<div className="mx-auto  w-10/12 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6">
			<p className="mt-1 mb-2 lg:text-xl md:text-xl text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
				{id}.
			</p>
			<Link
				href={`/tasks/${id}`}
				className="hover:underline mt-1 mb-2 lg:text-2xl md:text-2xl text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
			>
				{title}
			</Link>
		</div>
	);
};

export default Task;

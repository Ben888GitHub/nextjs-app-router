import Link from 'next/link';

// * generateStaticParams() with dynamic Routes: https://www.js-craft.io/blog/example-of-using-the-generatestaticparams-in-nextjs-13-within-the-app-folder/
// * https://www.emenikedaniel.tech/nextjs-generatestaticparams

export const generateStaticParams = async () => {
	const tasks = await fetch('https://jsonplaceholder.typicode.com/todos').then(
		(res) => res.json()
	);

	return tasks.slice(0, 9).map(({ id }) => ({ id: String(id) }));
};

const getTask = async (id) => {
	const task = await fetch(
		`https://jsonplaceholder.typicode.com/todos/${String(id)}`
	).then((res) => res.json());

	return task;
};

const TaskContent = async ({ params: { id } }) => {
	const task = await getTask(id);

	// console.log(task);

	return (
		<>
			<Link href="/tasks" className="text-lg underline">
				Back to Tasks
			</Link>
			<div className="mx-auto  lg:w-3/12 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-3 mb-6">
				<p className="mt-1 mb-2 lg:text-xl md:text-xl text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
					userId: {task.userId}.
				</p>
				<p className="mt-1 mb-2 lg:text-xl md:text-xl text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
					id: {task.id}.
				</p>
				<p className="hover:underline mt-1 mb-2 lg:text-2xl md:text-2xl text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
					Title: {task.title}
				</p>
			</div>
		</>
	);
};

export default TaskContent;

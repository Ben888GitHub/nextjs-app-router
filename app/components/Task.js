'use client';

import { useRouter } from 'next/navigation';

const Task = ({ id, title, description }) => {
	const router = useRouter();

	const handleDeleteTask = async () => {
		const response = await fetch(`http://localhost:4000/tasks/${id}`, {
			method: 'DELETE'
		});

		console.log(`Deleted: ${response.json()}`);

		router.refresh();
	};

	return (
		<div className="mx-auto  w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6">
			<p className="mt-1 mb-2 lg:text-xl md:text-xl text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
				{id}.
			</p>
			<p className="mt-1 mb-2 lg:text-2xl md:text-2xl text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
				{title}
			</p>
			<p className="lg:text-lg md:text-lg text-md mb-3 font-normal text-gray-500 dark:text-gray-400">
				{description}
			</p>
			<div
				type="button"
				onClick={handleDeleteTask}
				className="text-center bg-red-500  cursor-pointer lg:p-3 md:p-3 p-2 rounded-md text-white font-normal"
			>
				Delete
			</div>
		</div>
	);
};

export default Task;

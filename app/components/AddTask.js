'use client';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';

const taskData = {
	title: '',
	description: ''
};

const AddTask = () => {
	const router = useRouter();

	const [newTask, setNewTask] = useState({ ...taskData });

	const handleUpdateInput = (e) => {
		setNewTask((currentTask) => ({
			...currentTask,
			[e.target.name]: e.target.value
		}));
	};

	// * API to add new task
	const handleAddTask = async (e) => {
		e.preventDefault();
		console.log(newTask);
		setNewTask({ ...taskData });

		const response = await fetch('http://localhost:4000/tasks', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ id: uuidv4(), ...newTask })
		});
		const addedTask = await response.json();
		router.refresh();
		console.log(addedTask);
		// return addedTask;
	};

	return (
		<form onSubmit={handleAddTask}>
			<div className="mb-6">
				<label
					htmlFor="text"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Task title
				</label>
				<input
					type="text"
					id="text"
					name="title"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="New Title..."
					required
					value={newTask.title}
					onChange={handleUpdateInput}
				/>
			</div>
			<div className="mb-6">
				<label
					htmlFor="text"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Task Description
				</label>
				<input
					type="text"
					id="text"
					name="description"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="New Description..."
					required
					value={newTask.description}
					onChange={handleUpdateInput}
				/>
			</div>
			<button
				type="submit"
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Submit
			</button>
		</form>
	);
};

export default AddTask;

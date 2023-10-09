import AddTask from '../components/AddTask';
import Task from '../components/Task';

const getTasks = async () => {
	// * SSR if dynamic
	const response = await fetch('http://localhost:4000/tasks', {
		cache: 'no-store'
	});

	await new Promise((resolve) => setTimeout(resolve, 1000));

	const tasks = await response.json();

	console.log(tasks);

	return tasks;
};

const Tasks = async () => {
	const tasks = await getTasks();

	return (
		<>
			<AddTask />
			<div className="grid lg:grid-cols-3 lg:gap-10  grid-cols-1 mt-6">
				{tasks.map((task) => (
					<Task key={task.id} {...task} />
				))}
			</div>
		</>
	);
};

export default Tasks;

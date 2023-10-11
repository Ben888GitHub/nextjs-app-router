// import AddTask from '../components/AddTask';
import Task from '../components/Task';

const getTasks = async () => {
	// * SSR if dynamic
	const response = await fetch('https://jsonplaceholder.typicode.com/todos');

	await new Promise((resolve) => setTimeout(resolve, 1000));

	const tasks = await response.json();

	console.log(tasks);

	return tasks;
};

const Tasks = async () => {
	const tasks = await getTasks();

	return (
		<>
			{/* <AddTask /> */}
			<p className="text-3xl text-center">Current Tasks</p>
			<div className="grid lg:grid-cols-3 lg:gap-8  grid-cols-1 mt-6">
				{tasks.slice(0, 9).map((task) => (
					<Task key={task.id} {...task} />
				))}
			</div>
		</>
	);
};

export default Tasks;

const fetchUsers = async () => {
	const users = await fetch('https://jsonplaceholder.typicode.com/users').then(
		(res) => res.json()
	);

	return users;
};

const TeamMembers = async () => {
	const users = await fetchUsers();

	return (
		<div>
			{users.map(({ id, name, username, email }) => (
				<div
					key={id}
					className="mx-auto  lg:w-9/12 md:w-9/12 w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6"
				>
					<p className="mt-1 mb-2 lg:text-2xl md:text-2xl text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
						{name}
					</p>
					<p className="lg:text-xl md:text-xl text-lg mb-3 font-normal text-gray-500 dark:text-gray-400">
						{username}
					</p>

					<p className="mb-6 font-normal text-gray-500 dark:text-gray-400">
						{email}
					</p>
				</div>
			))}
		</div>
	);
};

export default TeamMembers;

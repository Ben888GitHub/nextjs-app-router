import Link from 'next/link';

const fetchCourses = async () => {
	// console.log(searchParams);

	const response = await fetch(
		`https://nextjs-app-router-lower-version.vercel.app/api/courses`
	);

	const courses = await response.json();
	// console.log(courses);
	return courses;
};

const Courses = async ({ searchParams }) => {
	const courses = await fetchCourses();

	const filteredCourse = courses.filter(({ title }) =>
		searchParams.search
			? title.toLowerCase().includes(searchParams.search)
			: title
	);

	return (
		<div>
			{filteredCourse.map(({ id, title, description, link, level }) => (
				<div
					key={id}
					className="mx-auto  lg:w-9/12 md:w-9/12 w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6"
				>
					<p className="mt-1 mb-2 lg:text-2xl md:text-2xl text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
						{title}
					</p>
					<p className="lg:text-lg md:text-lg text-md mb-3 font-normal text-gray-500 dark:text-gray-400">
						{description}
					</p>

					<p className="mb-6 font-normal text-gray-500 dark:text-gray-400">
						Level: {level}
					</p>
					<div className="mb-3">
						<Link
							href={link}
							target="_blank"
							className="bg-blue-500  cursor-pointer lg:p-3 md:p-3 p-2 rounded-md text-white font-normal"
						>
							Go to Course
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export default Courses;

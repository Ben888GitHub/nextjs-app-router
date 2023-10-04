import Link from 'next/link';
import Search from './Search';

const fetchCourses = async () => {
	const response = await fetch(
		`https://nextjs-app-router-lower-version.vercel.app/api/courses`
	);

	const courses = await response.json();

	return courses;
};

const Courses = async () => {
	const courses = await fetchCourses();

	// courses && console.log(courses);

	return (
		<div>
			<Search />
			{courses.map(({ id, title, description, link, level }) => (
				<div
					key={id}
					className="mx-auto  w-9/12 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5"
				>
					<p className="mt-1 mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
						{title}
					</p>
					<p className="text-lg mb-3 font-normal text-gray-500 dark:text-gray-400">
						{description}
					</p>

					<p className="mb-6 font-normal text-gray-500 dark:text-gray-400">
						Level: {level}
					</p>
					<div className="mb-3">
						<Link
							// href={`/courses/${id}`}
							href={link}
							target="_blank"
							className="bg-blue-500  cursor-pointer p-3 rounded-md text-white font-normal"
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

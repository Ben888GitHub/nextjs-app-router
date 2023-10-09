// 'use client';

import Courses from './components/Courses';
import SearchCourses from './components/SearchCourses';
// import { useSearchParams } from 'next/navigation';

export default function Home({ searchParams }) {
	// const searchParams = useSearchParams();

	// console.log(searchParams.get('search'));
	// console.log(searchParams);
	return (
		<div>
			{/* <p className="lg:text-3xl md:text-3xl text-xl text-center mb-7">
				App Router Next.js
			</p> */}
			<SearchCourses searchParams={searchParams} />
			<Courses searchParams={searchParams} />
		</div>
	);
}

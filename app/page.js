import Courses from './components/Courses';
import SearchFilter from './components/SearchFilter';

export default function Home({ searchParams }) {
	// console.log(searchParams);
	return (
		<div>
			<SearchFilter searchParams={searchParams} pageRoute={`/`} />
			<Courses searchParams={searchParams} />
		</div>
	);
}

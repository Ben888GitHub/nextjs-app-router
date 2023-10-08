import Courses from './components/Courses';

export default function Home() {
	return (
		<div>
			<p className="lg:text-3xl md:text-3xl text-xl text-center mb-7">
				App Router Next.js
			</p>
			<Courses />
		</div>
	);
}

import SectionalCards from '../components/SectionalCards';
import SectionalNavbar from '../components/SectionalNavbar';

export default function DataWithSections() {
	return (
		<>
			<p className="text-3xl">Data with Sections</p>

			<SectionalNavbar />

			<SectionalCards />
		</>
	);
}

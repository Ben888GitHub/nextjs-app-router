import './globals.css';
import { Inter } from 'next/font/google'; // https://nextjs.org/docs/app/building-your-application/optimizing/fonts
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

// * Metadata is to define the page title, description, meta tag for SEO
// * https://nextjs.org/docs/app/building-your-application/optimizing/metadata

export const metadata = {
	title: 'WebDev Passions',
	description: 'Monetize your skills and passions',
	keywords:
		'With Web Skills you can go for the career paths of Frontend Developer, Technical Writer, or even Developer Advocate'
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{/* navigation bar in root layout where you can view across pages */}
				{/* reference: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts */}
				<Header />
				<main className="flex flex-col items-center justify-between lg:p-16 md:p-10 p-10">
					{children}
				</main>
			</body>
		</html>
	);
}

// * Metadata is to define the page title, description, meta tag for SEO
// * https://nextjs.org/docs/app/building-your-application/optimizing/metadata

export const metadata = {
	title: 'About WebDev',
	description:
		'With Web Skills you can go for the career paths of Frontend Developer, Technical Writer, or even Developer Advocate',
	keywords: 'React, Next.js, API'
};

const About = () => {
	return (
		<div>
			<p className="text-3xl">About Page</p>
			<p className="text-xl">Lorem Ipsum</p>
		</div>
	);
};

export default About;

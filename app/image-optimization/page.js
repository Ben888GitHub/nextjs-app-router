import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

const imagesList = [
	{
		src: `https://${process.env.NEXT_UNSPLASH_DOMAIN}/photo-1593510987185-1ec2256148a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`,
		alt: 'cia_briefing_room'
	},
	// {
	// 	src: '/images/home_deck.jpg',
	// 	alt: 'home_deck'
	// }
	{
		src: `https://${process.env.NEXT_UNSPLASH_DOMAIN}/photo-1612081508965-8a681aaa707a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`,
		alt: 'mi6_london'
	}
];

const ImageOptimization = () => {
	return (
		<>
			<p className="text-3xl mb-2">Image Optimization</p>
			<div className="lg:flex">
				{imagesList.map(({ src, alt }) => (
					<Fragment key={alt}>
						<Image
							src={src}
							alt={alt}
							width={500}
							height={500}
							priority
							// sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
							className="lg:m-5 lg:mb-0 mb-5 w-full h-auto"
						/>
					</Fragment>
				))}
			</div>
			<Link
				href="/image-optimization/background-image"
				className="text-xl underline mt-5"
			>
				Go to background image
			</Link>
			<Link
				href="/image-optimization/fill-container"
				className="text-xl underline mt-5"
			>
				Go to fill container or responsive images grid
			</Link>
			<Link
				href="/image-optimization/responsive-image-first"
				className="text-xl underline mt-5"
			>
				Go to first responsive image
			</Link>
		</>
	);
};

export default ImageOptimization;

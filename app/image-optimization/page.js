import Image from 'next/image';
import { Fragment } from 'react';
import ImagesNavigation from '../components/ImagesNavigation';

const unsplashDomain = process.env.NEXT_UNSPLASH_DOMAIN;

const imagesList = [
	{
		src: `https://${unsplashDomain}/photo-1593510987185-1ec2256148a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`,
		alt: 'cia_briefing_room'
	},
	{
		src: `https://${unsplashDomain}/photo-1612081508965-8a681aaa707a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`,
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
							// width={640}
							// height={427}
							width={500}
							height={500}
							priority
							// sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
							// sizes="(min-width: 1220px) 30vw, (min-width: 780px) 50vw, calc(100vw - 80px)"
							className="lg:m-5 lg:mb-0 mb-5 w-full h-auto"
						/>
					</Fragment>
				))}
			</div>
			<ImagesNavigation />
		</>
	);
};

export default ImageOptimization;

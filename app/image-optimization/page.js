import Image from 'next/image';
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
							className="lg:m-5 lg:mb-0 mb-5 w-auto h-auto"
						/>
					</Fragment>
				))}
			</div>
			{/* <Image
				src="https://images.unsplash.com/photo-1593510987185-1ec2256148a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
				alt="cia_briefing_room"
				width={500}
				height={500}
				className="mt-10 rounded-md w-auto h-auto"
			/> */}
		</>
	);
};

export default ImageOptimization;

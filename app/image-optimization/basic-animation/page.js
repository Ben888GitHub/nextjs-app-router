// 'use client';

import ImagesNavigation from '@/app/components/ImagesNavigation';
import dynamic from 'next/dynamic';
// import Image from 'next/image';

const AnimatedImage = dynamic(() => import('../../components/AnimatedImage'), {
	ssr: false,
	loading: () => <p className="text-lg">Loading Image...</p>
});

// * Reference: https://www.youtube.com/watch?v=GG66vQgc1Vg&t=1s
// * this animation can also be done with Framer Motion

const AnimatedResponsiveImage = () => (
	<>
		<div className="flex flex-wrap gap-5">
			{/* <Image
				src={`https://picsum.photos/600/400`}
				alt=""
				width={600}
				height={400}
				className="w-full h-auto transition-opacity opacity-0  duration-[2s]"
				priority
				// loading="lazy"
				// sizes="(max-width: 768px) 250vw, (max-width: 1200px) 100vw, 175vw"
				onLoad={(img) => console.log(img.target.naturalWidth)}
				onLoadingComplete={(img) => img.classList.remove('opacity-0')} // * good for animation on basic level
			/> */}
			<AnimatedImage />
		</div>
		<ImagesNavigation />
	</>
);
export default AnimatedResponsiveImage;

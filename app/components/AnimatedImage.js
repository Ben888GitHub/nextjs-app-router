'use client';

import Image from 'next/image';

const AnimatedImage = () => (
	<Image
		src={`https://picsum.photos/600/400`}
		alt=""
		width={600}
		height={400}
		className="w-full h-auto transition-opacity opacity-0  duration-[2s]"
		priority
		// loading="lazy"
		// sizes="(max-width: 768px) 250vw, (max-width: 1200px) 100vw, 175vw"
		// onLoad={(img) => console.log(img.target.naturalWidth)}
		onLoadingComplete={(img) => img.classList.remove('opacity-0')} // * good for animation on basic level
	/>
);

export default AnimatedImage;

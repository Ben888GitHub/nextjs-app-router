import ImagesNavigation from '@/app/components/ImagesNavigation';
import Image from 'next/image';

// * Reference: https://larainfo.com/blogs/how-to-use-background-image-in-nextjs-with-tailwind-css

const BackgroundImage = () => {
	return (
		<>
			<div className="relative w-full h-60 lg:max-w-2xl lg:h-80">
				<div className="absolute inset-0">
					<Image
						alt="surveillance"
						src="/images/sur_territory.avif"
						fill
						className="object-cover"
						sizes="(min-width: 1040px) 672px, calc(100vw - 80px)"
						priority
					/>
				</div>
				<div className="relative z-10 flex flex-col items-center justify-center h-full">
					<h1 className="text-2xl font-bold text-gray-200">
						Next JS 13 Background Image with Tailwind CSS{' '}
					</h1>
					<p className="mt-4 text-sm text-white">
						lorem ipsom Next JS 13 Background Image with Tailwind CSS
					</p>
				</div>
			</div>
			<ImagesNavigation />
		</>
	);
};

export default BackgroundImage;

import Image from 'next/image';
import ImagesNavigation from '@/app/components/ImagesNavigation';

// * Reference: https://larainfo.com/blogs/how-to-use-background-image-in-nextjs-with-tailwind-css
// * https://image-component.nextjs.gallery/background
const BackgroundImageText = () => {
	return (
		<>
			<div className="absolute -z-1 w-full h-screen overflow-hidden">
				<Image
					alt="surveillance"
					src="/images/sur_territory.avif"
					fill
					className="object-cover brightness-50"
					// style={{ filter: 'brightness(50%)' }}
					sizes="100vw"
					priority
				/>
				<div className="relative z-10 flex flex-col items-center justify-center  mt-10">
					<h1 className="lg:text-5xl md:text-3xl text-2xl lg:w-full w-80 font-bold text-center text-gray-200">
						Next JS 13 Background Image with Tailwind CSS{' '}
					</h1>
					<p className="mt-4 text-sm text-white mb-12">
						lorem ipsom Next JS 13 Background Image with Tailwind CSS
					</p>
					<ImagesNavigation />
				</div>
			</div>
		</>
	);
};

export default BackgroundImageText;

// * Darken image brightness without affecting text: https://chat.openai.com/c/c5d25938-b3be-4f9a-968d-cf0adc3eb39e

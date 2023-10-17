import ImagesNavigation from '@/app/components/ImagesNavigation';
import Image from 'next/image';

// * References: https://flowbite.com/docs/components/gallery/ cross-reference with https://github.com/gitdagray/nextjs-image-gallery-ninja/tree/lesson-6/src/app/components

const pexelApiUrl = 'https://api.pexels.com/v1/curated';

const fetchPexelsImages = async () => {
	const images = await fetch(pexelApiUrl, {
		headers: {
			Authorization: process.env.NEXT_PEXELS_KEY
		}
	}).then((res) => res.json());

	return images;
};

const TailwindImageGallery = async () => {
	const images = await fetchPexelsImages();

	// images && console.log(images.photos);

	return (
		<>
			<p className="text-3xl mb-5">Random Image Gallery with Tailwind</p>
			<div
				// className="px-2 my-3 grid gap-2 grid-cols-gallery"
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
			>
				{images.photos.map(({ id, src, alt }) => (
					<div
						key={id}
						// className="h-64 bg-gray-200 rounded-xl relative overflow-hidden group"
						className="relative w-[300px] h-[300px] group overflow-hidden"
					>
						<Image
							src={src.large}
							alt={alt}
							fill
							// width={500}
							// height={500}
							// sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
							// className="max-w-full h-auto group-hover:opacity-75"
							// sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
							// className="object-cover group-hover:opacity-75"
							className="object-cover rounded-lg group-hover:opacity-75 cursor-pointer"
							// sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							sizes="300px"
							priority
						/>
					</div>
				))}
			</div>

			<ImagesNavigation />
		</>
	);
};

export default TailwindImageGallery;

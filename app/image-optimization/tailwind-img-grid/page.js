import ImagesNavigation from '@/app/components/ImagesNavigation';
import { fetchPexelsImages } from '@/app/libs/fetchPexelsImages';
import Image from 'next/image';

const TailwindImageGrid = async () => {
	const images = await fetchPexelsImages();

	return (
		<>
			<div className="w-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-5 columns-3 space-y-5"></div>
			{images.photos.map(({ id, src, alt }) => (
				<Image
					key={id}
					src={src.original}
					alt={alt}
					// width={500}
					// height={500}
					fill
					className="object-contain rounded-lg"
					// sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					// sizes="300px"
					priority
				/>
			))}

			<ImagesNavigation />
		</>
	);
};

export default TailwindImageGrid;

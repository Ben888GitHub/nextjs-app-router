import BlurImage from '@/app/components/BlurImage';
import ImagesNavigation from '@/app/components/ImagesNavigation';
import { fetchPexelsImages } from '@/app/libs/fetchPexelsImages';

// * Blur placeholder, https://nextjs.org/docs/app/api-reference/components/image#placeholder
// * BlurDataURL, https://nextjs.org/docs/app/api-reference/components/image#blurdataurl

const TailwindGalleryBlur = async () => {
	const images = await fetchPexelsImages();

	return (
		<>
			<p className="text-3xl mb-5">Blur Image Gallery with Plaiceholder</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				{images.photos.map(({ id, ...props }) => (
					<div
						key={id}
						className="relative w-[300px] h-[300px] group overflow-hidden"
					>
						<BlurImage {...props} />
					</div>
				))}
			</div>

			<ImagesNavigation />
		</>
	);
};

export default TailwindGalleryBlur;

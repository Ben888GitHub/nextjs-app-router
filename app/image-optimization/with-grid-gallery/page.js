import GridGallery from '@/app/components/GridGallery';
import { fetchPexelsImages } from '@/app/libs/fetchPexelsImages';
import Image from 'next/image';

const WithGridGallery = async () => {
	const images = await fetchPexelsImages();

	return (
		<>
			<GridGallery {...images} />
		</>
	);
};

export default WithGridGallery;

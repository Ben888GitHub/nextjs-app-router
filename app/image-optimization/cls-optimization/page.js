// * https://youtu.be/gpJKj45AikY?si=RBBAgSAZ384x2E_z&t=217, Optimize CLS

import ImagesNavigation from '@/app/components/ImagesNavigation';
import Image from 'next/image';

const imgSrc =
	'https://raw.githubusercontent.com/gitdagray/test-blogposts/main/images/NextLevel1.png';

const CLSOptimization = () => (
	<>
		<Image
			className="rounded-lg mx-auto"
			src={imgSrc}
			width={650} // * incorrect aspect ratio from the actual image that can cause high CLS
			height={366} // * incorrect aspect ratio from the actual image that can cause high CLS
			// sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
			sizes="(min-width: 780px) 650px, calc(93.48vw - 60px)"
			alt=""
			priority
		/>

		<ImagesNavigation />
	</>
);

export default CLSOptimization;

// * Go to Network tab -> Elements, and check the difference between Rendered Size and Intrinsic Size
// * Try to make the width and height the same as Rendered Size

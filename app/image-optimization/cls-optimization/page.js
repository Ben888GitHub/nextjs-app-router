// * https://youtu.be/gpJKj45AikY?si=RBBAgSAZ384x2E_z&t=217, Optimize CLS

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
			alt=""
			priority
		/>
	</>
);

export default CLSOptimization;

// * Go to Network tab -> Elements, and check the difference between Rendered Size and Intrinsic Size
// * Try to make the width and height the same as Rendered Size

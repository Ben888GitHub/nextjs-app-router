import getBase64 from '../libs/getLocalBase64';
import Image from 'next/image';

const BlurImage = async ({ src, alt }) => {
	const myBlurDataUrl = await getBase64(src.large);

	return (
		<Image
			src={src.large}
			alt={alt}
			fill
			className="object-cover rounded-lg group-hover:opacity-75 cursor-pointer"
			sizes="300px"
			priority
			placeholder="blur"
			blurDataURL={myBlurDataUrl}
		/>
	);
};

export default BlurImage;

import Image from 'next/image';

const BackgroundImage = () => {
	return (
		<Image
			alt="surveillance"
			src="/images/sur_territory.avif"
			// placeholder="blur"
			quality={100}
			fill
			sizes="100vw"
			className="object-cover"
		/>
	);
};

export default BackgroundImage;

import Image from 'next/image';

const ResponsiveImage = () => (
	<div className="flex flex-col">
		<Image
			alt="home deck"
			src="/images/home_deck.jpg"
			sizes="100vw"
			width={500}
			height={500}
			className="w-full h-auto"
			priority
		/>
	</div>
);

export default ResponsiveImage;

import Image from 'next/image';

const ResponsiveImage = () => (
	<div className="flex flex-col">
		<Image
			alt="home deck"
			src="/images/home_deck.jpg"
			// sizes="100vw"
			sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
			width={500}
			height={500}
			className="w-full h-auto"
			priority
		/>
	</div>
);

export default ResponsiveImage;

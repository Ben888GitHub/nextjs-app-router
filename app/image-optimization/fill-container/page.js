import Image from 'next/image';

const FillContainer = () => {
	return (
		<div
			style={{
				display: 'grid',
				gridGap: '8px',
				gridTemplateColumns: 'repeat(auto-fit, minmax(900px, auto))'
			}}
			// className="grid gap-2 grid-cols-[repeat(auto-fit, minmax(400px,auto))]"
		>
			<div className="relative h-[400px]">
				<Image
					alt="Mountains"
					src="/images/home_deck.jpg"
					fill
					sizes="100vw"
					className="object-cover" // cover, contain, none
				/>
			</div>
			<div className="relative h-[400px]">
				<Image
					alt="Mountains"
					src="/images/home_deck.jpg"
					fill
					sizes="100vw"
					className="object-cover" // cover, contain, none
				/>
			</div>
			<div className="relative h-[400px]">
				<Image
					alt="Mountains"
					src="/images/home_deck.jpg"
					fill
					sizes="100vw"
					className="object-cover" // cover, contain, none
				/>
			</div>
		</div>
	);
};

export default FillContainer;

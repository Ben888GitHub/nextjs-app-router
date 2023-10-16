import ImagesNavigation from '@/app/components/ImagesNavigation';
import Image from 'next/image';

// * Reference: https://nextjs.org/docs/app/api-reference/components/image#responsive-image-with-fill
// * use this approach if the remote image's size is unknown
const ResponsiveImageFillAndContain = () => {
	return (
		<>
			<div className="relative lg:w-[800px] lg:h-[600px] md:w-[600px] md:h-[400px]  w-[500px] h-[300px]">
				<Image
					src={`https://${process.env.NEXT_UNSPLASH_DOMAIN}/photo-1593510987185-1ec2256148a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`}
					alt="cia_briefing_room"
					sizes="800px"
					fill
					className="object-contain"
					priority
				/>
			</div>
			<ImagesNavigation />
		</>
	);
};

export default ResponsiveImageFillAndContain;

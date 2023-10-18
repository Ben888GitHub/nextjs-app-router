import Image from 'next/image';
import ImagesNavigation from '@/app/components/ImagesNavigation';

const BackgroundImageRemote = () => {
	return (
		<>
			<div className="absolute -z-1 w-full h-screen overflow-hidden">
				<Image
					alt="surveillance"
					src={`https://${process.env.NEXT_UNSPLASH_DOMAIN}/photo-1593510987185-1ec2256148a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`}
					fill
					className="object-cover brightness-50"
					// style={{ filter: 'brightness(50%)' }}
					sizes="100vw"
					priority
				/>
				<div className="relative z-10 flex flex-col items-center justify-center  mt-10">
					<h1 className="lg:text-5xl md:text-3xl text-2xl lg:w-full w-80 font-bold text-center text-gray-200">
						Next JS 13 Background Image with Tailwind CSS{' '}
					</h1>
					<p className="mt-4 text-sm text-white mb-12">
						lorem ipsom Next JS 13 Background Image with Tailwind CSS
					</p>
					<ImagesNavigation />
				</div>
			</div>
		</>
	);
};

export default BackgroundImageRemote;

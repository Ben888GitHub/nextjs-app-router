import Link from 'next/link';

const imagesNav = [
	{
		href: '/image-optimization',
		nav: 'Go to main page of Image Optimization'
	},
	{
		href: '/image-optimization/responsive-image-first',
		nav: 'Go to responsive image with aspect ratio and responsive sizes props'
	},
	{
		href: '/image-optimization/responsive-image-second',
		nav: 'Go to responsive image with fill'
	},
	{
		href: '/image-optimization/basic-animation',
		nav: 'Go to basic animated image'
	},
	{
		href: '/image-optimization/background-image',
		nav: 'Go to background image'
	},
	{
		href: '/image-optimization/tailwind-img-gallery',
		nav: 'Go to Tailwind Images Gallery'
	},
	{
		href: '/image-optimization/tailwind-img-mansory',
		nav: 'Go to Tailwind Images Mansory'
	},
	{
		href: '/image-optimization/with-grid-gallery',
		nav: 'React Grid Gallery'
	},
	{
		href: '/image-optimization/cls-optimization',
		nav: 'Images CLS Optimization'
	}
];

const ImagesNavigation = () => {
	return (
		<>
			{imagesNav.map(({ href, nav }) => (
				<Link key={href} href={href} className="text-xl underline mt-5">
					{nav}
				</Link>
			))}
		</>
	);
};

export default ImagesNavigation;

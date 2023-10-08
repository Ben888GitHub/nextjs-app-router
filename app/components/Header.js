import Link from 'next/link';
import { headerNav, variants } from '../utils/headerData';

const Header = () => {
	return (
		<header>
			<nav className="bg-white border-gray-200 px-4 lg:px-6 py-7 dark:bg-gray-800">
				<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
					<div
						className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
						id="mobile-menu-2"
					>
						<ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
							{headerNav.map(({ href, value }) => (
								<li key={href}>
									<Link
										// prefetch={false}
										href={href}
										className={
											href === '/' ? variants.homeClass : variants.navClass
										}
										aria-current="page"
									>
										{value}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;

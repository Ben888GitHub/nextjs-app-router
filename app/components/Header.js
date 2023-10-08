'use client';

import Link from 'next/link';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import { headerNav, variants } from '../utils/headerData';

const Header = () => {
	return (
		<Disclosure as="nav" className="bg-gray-800">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
						<div className="relative flex h-16 items-center justify-between">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="absolute -inset-0.5" />
									<span className="sr-only">Open main menu</span>
									{open ? (
										<HiXMark className="block h-6 w-6" aria-hidden="true" />
									) : (
										<HiBars3 className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>

							<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
								<div className="hidden sm:ml-6 sm:block">
									<div className="flex space-x-4">
										{headerNav.map(({ href, value }) => (
											<Link
												key={href}
												href={href}
												className={
													href === '/' ? variants.homeClass : variants.navClass
												}
												aria-current="page"
											>
												{value}
											</Link>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 px-2 pb-3 pt-2">
							{headerNav.map(({ href, value }) => (
								<Disclosure.Button
									as="a"
									key={href}
									href={href}
									className={
										href === '/' ? variants.homeClass : variants.navClass
									}
									aria-current="page"
								>
									{value}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

// const Header = () => {
// 	return (
// 		<header>
// 			<nav className="bg-white border-gray-200 px-4 lg:px-6 py-7 dark:bg-gray-800">
// 				<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
// 					<div
// 						className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
// 						id="mobile-menu-2"
// 					>
// 						<ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
// 							{headerNav.map(({ href, value }) => (
// 								<li key={href}>
// 									<Link
// 										// prefetch={false}
// 										href={href}
// 										className={
// 											href === '/' ? variants.homeClass : variants.navClass
// 										}
// 										aria-current="page"
// 									>
// 										{value}
// 									</Link>
// 								</li>
// 							))}
// 						</ul>
// 					</div>
// 				</div>
// 			</nav>
// 		</header>
// 	);
// };

export default Header;

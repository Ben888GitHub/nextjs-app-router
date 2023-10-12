'use client';

import Link from 'next/link';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import { headerNav, variants } from '../utils/headerData';
import { usePathname } from 'next/navigation';

const Header = () => {
	const pathname = usePathname();

	return (
		<Disclosure as="nav" className="bg-gray-800">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
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
										{headerNav.map(({ href, value }, idx) => (
											<Link
												key={idx}
												href={href}
												prefetch={false} // todo, omit this
												className={
													href === pathname
														? variants.homeClass
														: variants.navClass
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
										href === pathname ? variants.homeClass : variants.navClass
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

export default Header;

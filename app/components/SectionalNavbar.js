'use client';

import { Disclosure, Menu, Transition } from '@headlessui/react';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import { dataWithSections } from '../utils/dataWithSections';
import { Fragment } from 'react';

export default function SectionalNavbar() {
	return (
		<Disclosure as="nav" className="bg-gray-800 mb-10">
			{({ open }) => (
				<>
					<div className="mx-auto w-96 lg:w-full px-2 sm:px-6 lg:px-10">
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
										{dataWithSections.map(({ name, items }, idx) => (
											<Menu key={idx} as="div">
												{({ open }) => (
													<div>
														<div>
															<Menu.Button
																onMouseEnter={({ target }) =>
																	open ? '' : target.click()
																}
																onMouseLeave={({ target }) => target.click()}
																aria-current="page"
																className=" block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
															>
																{name}
															</Menu.Button>
														</div>

														<Transition
															as={Fragment}
															enter="transition ease-out duration-100"
															enterFrom="transform opacity-0 scale-95"
															enterTo="transform opacity-100 scale-100"
															leave="transition ease-in duration-75"
															leaveFrom="transform opacity-100 scale-100"
															leaveTo="transform opacity-0 scale-95"
														>
															<Menu.Items className="absolute block  z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-900 dark:border-gray-700 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
																{items.map(({ name, slug }) => (
																	<Menu.Item key={slug}>
																		<p className=" block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
																			{name}
																		</p>
																	</Menu.Item>
																))}
															</Menu.Items>
														</Transition>
													</div>
												)}
											</Menu>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 px-2 pb-3 pt-2">
							{dataWithSections.map(({ name, items }) => (
								<Disclosure.Button
									key={name}
									// aria-current="page"
									className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
								>
									{name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}

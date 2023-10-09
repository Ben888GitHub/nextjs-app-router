'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { useDebounce } from 'use-debounce';

const SearchCourses = ({ searchParams }) => {
	const router = useRouter();
	const initialRender = useRef(true);
	const search =
		typeof searchParams.search === 'string' ? searchParams.search : undefined;
	const [searchVal, setSearchVal] = useState(search);
	const [query] = useDebounce(searchVal, 750);

	const handleSearchVal = (e) => {
		setSearchVal(e.target.value);
		console.log(e.target.value);
	};

	useEffect(() => {
		if (initialRender.current) {
			initialRender.current = false;
			return;
		}

		if (!query) {
			router.push(`/`);
		} else {
			router.push(`/?search=${query}`);
		}
	}, [query]);

	return (
		<div className="mx-auto lg:w-5/12 md:w-6/12 w-full mb-6">
			<form onSubmit={(e) => e.preventDefault()}>
				<label
					htmlFor="default-search"
					className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
				>
					Search
				</label>
				<div className="relative">
					<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg
							className="w-4 h-4 text-gray-500 dark:text-gray-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
							/>
						</svg>
					</div>
					<input
						type="search"
						id="default-search"
						className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Search Courses..."
						value={searchVal}
						onChange={handleSearchVal}
						required
					/>
				</div>
			</form>
		</div>
	);
};

export default SearchCourses;

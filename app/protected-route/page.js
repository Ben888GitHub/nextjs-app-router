'use client';

import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

const ProtectedRoute = () => {
	const setRandomToken = () => {
		localStorage.setItem('token', uuidv4());
	};

	return (
		<>
			<button
				onClick={setRandomToken}
				className="bg-blue-500  cursor-pointer lg:p-3 md:p-3 p-2 rounded-md text-white font-normal"
			>
				Generate Token
			</button>
			<Link className="mt-5 underline" href="/protected-route/protected">
				Go to Content
			</Link>
		</>
	);
};

export default ProtectedRoute;

'use client';

// import LocalStorageItem from '@/app/components/LocalStorageItem';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';

const LocalStorageItem = dynamic(
	() => import('@/app/components/LocalStorageItem'),
	{
		ssr: false,
		loading: () => <p className="text-xl">Loading...</p>
	}
);

// let item;

const ProtectedContent = () => {
	const router = useRouter();

	const deleteToken = () => {
		localStorage.removeItem('token');
		router.push('/protected-route');
	};
	return (
		<>
			{/* <p className="text-3xl">Welcome, token {item}</p> */}
			<LocalStorageItem />
			<button
				onClick={deleteToken}
				className="bg-red-500  cursor-pointer lg:p-3 md:p-3 p-2 rounded-md text-white font-normal mt-5"
			>
				Delete Token
			</button>
		</>
	);
};

export default ProtectedContent;

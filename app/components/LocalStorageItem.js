'use client';

import { redirect } from 'next/navigation';
let item;
const LocalStorageItem = () => {
	if (typeof window !== 'undefined') {
		// Perform localStorage action
		item = localStorage.getItem('token');
		if (!item) {
			redirect('/protected-route');
		}
	}

	return <p className="text-3xl">Welcome, token {item}</p>;
};

export default LocalStorageItem;

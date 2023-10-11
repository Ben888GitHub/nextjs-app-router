'use client';

import { useState, useEffect } from 'react';

const CSRNoAPICaching = () => {
	const [randomNumber, setRandomNumber] = useState('');

	useEffect(() => {
		setRandomNumber(String(Math.random()) || 'Loading...');
	}, []);

	return <p className="text-3xl">{randomNumber}</p>;
};

export default CSRNoAPICaching;

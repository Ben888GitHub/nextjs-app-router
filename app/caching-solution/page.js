// export const dynamic = 'force-dynamic';
// 'use client';

// import { useState, useEffect } from 'react';

const getRandomNumber = () => {
	return Math.random();
};

const CachingSolution = () => {
	// const [randomNumber, setRandomNumber] = useState('');

	// useEffect(() => {
	// 	setRandomNumber(String(getRandomNumber()) || 'Loading...');
	// }, []);

	return <p className="text-5xl">{getRandomNumber()}</p>;
};

export default CachingSolution;

// export const dynamic = 'force-dynamic';

const getRandomNumber = () => {
	return Math.random();
};

const CachingSolution = () => {
	return <p className="text-5xl">{getRandomNumber()}</p>;
};

export default CachingSolution;

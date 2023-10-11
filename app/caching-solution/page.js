// export const dynamic = 'force-dynamic';
// export const fetchCache = 'force-no-store';
// export const revalidate = 0;
// * https://www.youtube.com/watch?v=ztswJg7MYCs&t=2s
// * https://nextjs.org/docs/app/building-your-application/caching
// * https://www.youtube.com/watch?v=7BgzXp35ZuU

const getRandomJoke = async () => {
	const res = await fetch('https://api.chucknorris.io/jokes/random', {
		cache: 'no-store'
	});

	return res.json();
};

const CachingSolution = async () => {
	const { value } = await getRandomJoke();

	return <p className="text-2xl">{value}</p>;
};

export default CachingSolution;

// * Caching Problem: https://www.youtube.com/watch?v=25yjSzl6PsQ

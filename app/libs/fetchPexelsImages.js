const pexelApiUrl = 'https://api.pexels.com/v1/curated';

export const fetchPexelsImages = async () => {
	const images = await fetch(pexelApiUrl, {
		headers: {
			Authorization: process.env.NEXT_PEXELS_KEY
		}
	}).then((res) => res.json());

	return images;
};

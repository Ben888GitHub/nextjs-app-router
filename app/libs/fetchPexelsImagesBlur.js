const pexelApiUrl = 'https://api.pexels.com/v1/curated';
const dogsApiUrl = 'https://shibe.online/api/shibes?count=10';

import { getPlaiceholder } from 'plaiceholder';

export const fetchPexelsImagesBlur = async () => {
	const raw = await fetch(dogsApiUrl);

	const images = await raw.json();
	// console.log(images.photos);
	// return images;
	return await Promise.all(
		images.map(async (src) => await getPlaiceholder(src))
	);
};

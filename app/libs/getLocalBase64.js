import { getPlaiceholder } from 'plaiceholder';

export default async function getBase64(imageUrl) {
	try {
		const res = await fetch(imageUrl);

		if (!res.ok) {
			throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
		}

		const buffer = await res.arrayBuffer();

		const { base64 } = await getPlaiceholder(Buffer.from(buffer));

		//console.log(`base64: ${base64}`)

		return base64;
	} catch (e) {
		if (e instanceof Error) console.log(e.stack);
	}
}

export async function getBase64MultiImages(images) {
	// Make all requests at once of awaiting each one - avoiding waterfall network
	const base64Promises = images.photos.map(({ src }) => getBase64(src.large));

	// resolve all requests in order
	const base64Results = await Promise.all(base64Promises);

	const photosWithBlur = images.photos.map((photo, i) => {
		photo.blurredDataUrl = base64Results[i];
		return photo;
	});

	return photosWithBlur;
}

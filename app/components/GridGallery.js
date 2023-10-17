'use client';
import PhotoAlbum from 'react-photo-album';

// * Reference: https://react-photo-album.com/examples/nextjs, https://medium.com/@ryaddev/image-gallery-and-carousel-in-next-js-and-tailwindcss-9a7327728c5c

const GridGallery = (images) => {
	// console.log(images);

	const slides = images.photos.map(({ width, height, src }) => ({
		src: src.original,
		width,
		height,
		srcSet: [
			{ src: src.original, width: 320, height: 213 },
			{ src: src.original, width: 640, height: 426 },
			{ src: src.original, width: 1200, height: 800 },
			{ src: src.original, width: 2048, height: 1365 },
			{ src: src.original, width: 3840, height: 2560 }
		]
	}));

	return (
		<>
			<PhotoAlbum
				layout="rows"
				photos={slides}
				// targetRowHeight={150}
				// renderPhoto={NextJsImage}
				defaultContainerWidth={1000}
				sizes={{
					size: '(min-width: 1340px) calc(10.3vw - 27px), (min-width: 1040px) calc(17.5vw - 34px), (min-width: 680px) calc(17.35vw - 24px), (min-width: 500px) calc(21.88vw - 23px), (min-width: 340px) calc(19.29vw - 12px), calc(15vw - 17px)'
				}}
				// onClick={({ index: current }) => setIndex(current)}
			/>
		</>
	);
};

export default GridGallery;

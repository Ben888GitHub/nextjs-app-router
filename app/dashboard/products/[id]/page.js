import { mockProducts } from '@/app/utils/productsData';
import Link from 'next/link';

// * Dynamic Metadata: https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-metadata
// * https://nextjs.org/docs/app/api-reference/functions/generate-metadata
// * https://medium.com/@danielcracbusiness/the-power-of-metadata-in-next-js-13-part-1-optimize-your-websites-seo-now-512e037ca9f9
export async function generateMetadata({ params, searchParams }, parent) {
	// console.log(params);

	const mockProduct = mockProducts.find(({ id }) => id === Number(params.id));

	if (mockProduct) {
		return {
			title: `Product ${params.id}`,
			description: mockProduct.description,
			icons: {
				icon: '/vercel.svg'
			}
		};
	} else {
		return {
			title: `Unknown Product`,
			description: `Product not found with id ${params.id}`
		};
	}
}

const AllProducts = () => (
	<div className="mb-2">
		<Link href="/dashboard/products" className="text-lg underline">
			Back to Products
		</Link>
	</div>
);

const Product = ({ params }) => {
	const mockProduct = mockProducts.find(({ id }) => id === Number(params.id));

	if (mockProduct) {
		return (
			<>
				<AllProducts />
				<div className="text-center max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5">
					<p className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
						{mockProduct.title}
					</p>

					<p className="mb-1 font-normal text-gray-500 dark:text-gray-400">
						{mockProduct.description}
					</p>
				</div>
			</>
		);
	}
	return (
		<>
			<AllProducts />
			<div className="text-center max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5">
				<p className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
					{`Product not found with id ${params.id}`}
				</p>
			</div>
		</>
	);
};

export default Product;

// * References:
// * https://dev.to/rainbowhat/dynamic-metadata-nextjs-13-app-directory-1iek
// * https://javascript.plainenglish.io/mastering-metadata-in-next-js-a-comprehensive-guide-to-seo-excellence-ab9c2cf0dc35
// * https://www.youtube.com/watch?v=cacys-rrQN8

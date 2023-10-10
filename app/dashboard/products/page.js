import { mockProducts } from '@/app/utils/productsData';
import Link from 'next/link';

const ProductsDashboard = () => (
	<>
		<p className="text-3xl mb-5">Products Dashboard</p>
		{mockProducts.map(({ id, title, description }) => (
			<div
				key={id}
				className="text-center max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5"
			>
				<Link
					href={`products/${id}`}
					className="hover:underline mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
				>
					{title}
				</Link>

				<p className="mb-1 font-normal text-gray-500 dark:text-gray-400">
					{description}
				</p>
			</div>
		))}
	</>
);

export default ProductsDashboard;

import { getCategory } from '@/app/libs/fetchVercelCategories';

const CategorySlug = async ({ params: { categorySlug } }) => {
	const category = await getCategory({ slug: categorySlug });
	return (
		<div className="space-y-4">
			<h1 className="text-xl font-medium text-gray-400/80">
				All {category.name}
			</h1>

			<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
				{Array.from({ length: 9 }).map((_, i) => (
					<SkeletonCard key={i} />
				))}
			</div>
		</div>
	);
};

export default CategorySlug;

function SkeletonCard() {
	return (
		<div className="rounded-2xl bg-gray-900/80 p-4">
			<div className="space-y-3">
				<div className="h-14 rounded-lg bg-gray-700" />
				<div className="h-3 w-11/12 rounded-lg bg-gray-700" />
				<div className="h-3 w-8/12 rounded-lg bg-gray-700" />
			</div>
		</div>
	);
}

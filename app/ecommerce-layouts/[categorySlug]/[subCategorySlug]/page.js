import { getCategory } from '@/app/libs/fetchVercelCategories';

const SubCategorySlug = async ({ params: { subCategorySlug } }) => {
	const category = await getCategory({ slug: subCategorySlug });

	return (
		<div className="space-y-4">
			<h1 className="text-xl font-medium text-gray-400/80">{category.name}</h1>

			<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
				{Array.from({ length: category.count }).map((_, i) => (
					<SkeletonCard key={i} />
				))}
			</div>
		</div>
	);
};

export default SubCategorySlug;

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

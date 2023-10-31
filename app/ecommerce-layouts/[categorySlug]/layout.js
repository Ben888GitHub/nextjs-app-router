import ECommerceTab from '@/app/components/ECommerceTab';
import { getCategories, getCategory } from '@/app/libs/fetchVercelCategories';

export async function generateMetadata({ params: { categorySlug } }) {
	return { title: `E-Commerce: ${categorySlug}` };
}

export default async function CategoryLayout({
	children,
	params: { categorySlug }
}) {
	const category = await getCategory({ slug: categorySlug });
	const categories = await getCategories();

	// category && console.log(category);

	return (
		<div className="space-y-9">
			<div className="flex justify-between">
				<ECommerceTab
					path={`/ecommerce-layouts/${category.slug}`}
					items={[
						{
							text: 'All'
						},
						...categories.map((x) => ({
							text: x.name,
							slug: x.slug
						}))
					]}
				/>
			</div>
			{children}
		</div>
	);
}

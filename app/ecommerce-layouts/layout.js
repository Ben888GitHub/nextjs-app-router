import ECommerceTab from '../components/ECommerceTab';
import { getCategories } from '../libs/fetchVercelCategories';

export const metadata = {
	title: 'Layouts in E-Commerce',
	description: 'your Description'
};

export default async function ECommerceLayout({ children }) {
	const categories = await getCategories();

	// categories && console.log(categories);

	return (
		<div className="space-y-9">
			<div className="flex justify-between">
				<ECommerceTab
					path="/ecommerce-layouts"
					items={[
						{
							text: 'Home'
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

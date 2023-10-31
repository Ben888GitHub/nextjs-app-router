export const getCategories = async () => {
	const categories = await fetch(
		`https://app-router-api.vercel.app/api/categories`
	).then((res) => res.json());

	return categories;
};

export const getCategory = async ({ slug }) => {
	const category = await fetch(
		`https://app-router-api.vercel.app/api/categories${
			slug ? `?slug=${slug}` : ''
		}`
	).then((res) => res.json());

	return category;
};

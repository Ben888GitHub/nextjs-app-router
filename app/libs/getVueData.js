export const getVueData = async () => {
	const response = await fetch(
		'https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
	);
	await new Promise((resolve) => setTimeout(resolve, 750));

	const vueData = await response.json();
	return vueData;
};

export const getVueData = async () => {
	try {
		const response = await fetch(
			'https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
		);
		await new Promise((resolve) => setTimeout(resolve, 750));

		const vueData = await response.json();
		return vueData;
	} catch (error) {
		// Handle error
		console.error(error);
		return { error };
	}
};

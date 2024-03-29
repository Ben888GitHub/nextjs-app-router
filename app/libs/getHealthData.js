export const getHealthData = async () => {
	try {
		const response = await fetch(
			'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
		);
		await new Promise((resolve) => setTimeout(resolve, 750));

		const healthData = await response.json();
		return healthData;
	} catch (error) {
		// Handle error
		console.error(error);
		return { error };
	}
};

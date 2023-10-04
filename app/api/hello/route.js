// * https://www.youtube.com/watch?v=vrR4MlB7nBI
// * Edge Function

// export const config = {
// 	runtime: 'edge'
// };

export const GET = async (req, res) => {
	// res.status(200).json({ name: 'Hi, Next.js!' });

	console.log(req.cookies);

	return new Response(JSON.stringify({ value: 'Hi, Next.js!' }));
};

export const POST = async (req, res) => {
	// res.status(200).json({ name: 'Hi, Next.js!' });

	console.log(req.cookies);

	return new Response(JSON.stringify({ value: 'POST, Next.js!' }));
};

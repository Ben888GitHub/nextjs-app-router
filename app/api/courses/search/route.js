import { NextResponse } from 'next/server';
import courses from '../data.json';

// * https://stackoverflow.com/questions/76409677/how-to-correctly-use-the-api-routes-in-the-next-js-13-using-app-router-framework
// * https://nextjs.org/docs/app/building-your-application/routing/route-handlers

// * Search Params: https://badih76.medium.com/url-query-params-dynamic-route-params-in-next-js-a98ab91ed526
export const GET = (req, res) => {
	// Option 1, using new URL for req.url
	// const { searchParams } = new URL(req.url);
	// console.log(searchParams.get('query'));
	// const query = searchParams.get('query');

	// Option 2, using req.nextUrl directly to get searchParams
	const queryFromNextURL = req.nextUrl.searchParams.get('query');
	console.log(queryFromNextURL);

	const filteredCourses = courses.filter(({ title }) =>
		title.toLowerCase().includes(queryFromNextURL.toLowerCase())
	);
	console.log(filteredCourses);
	return NextResponse.json(filteredCourses);
};

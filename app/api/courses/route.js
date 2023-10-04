import { NextResponse } from 'next/server';

import courses from './data.json';
import { v4 as uuidv4 } from 'uuid';

// * https://stackoverflow.com/questions/76409677/how-to-correctly-use-the-api-routes-in-the-next-js-13-using-app-router-framework
// * https://nextjs.org/docs/app/building-your-application/routing/route-handlers

export const GET = (req, res) => {
	// Option 1, using return new Response
	// return new Response(JSON.stringify(courses));

	// Option 2, using built-in NextResponse
	return NextResponse.json(courses);
};

export const POST = async (req, res) => {
	const { title, description, level, link } = await req.json();

	const newCourse = {
		id: uuidv4(),
		title,
		description,
		level,
		link
	};

	courses.push(newCourse);
	// console.log(title, description, level, link);

	// return NextResponse.json(course);
	return NextResponse.json({ message: 'new course added', courses });
};

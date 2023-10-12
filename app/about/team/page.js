// import TeamMembers from "@/app/components/TeamMembers";
import dynamic from 'next/dynamic';
// * Dynamic Import: https://www.youtube.com/watch?v=MXe88BI8q-c&list=WL&index=2
const TeamMembers = dynamic(() => import('@/app/components/TeamMembers'), {
	loading: () => <p className="text-lg">Loading Members...</p>
});

export const metadata = {
	title: 'Amazing Team',
	description:
		'With Web Skills you can go for the career paths of Frontend Developer, Technical Writer, or even Developer Advocate',
	keywords: 'React, Next.js, API'
};

const TeamPage = () => {
	return (
		<>
			<p className="text-3xl">Our Amazing Team</p>
			<p className="text-xl">this is team</p>
			<br />
			{/* <button className="p-2 rounded-md text-lg bg-blue-500">Show Team</button> */}
			<TeamMembers />
		</>
	);
};

export default TeamPage;

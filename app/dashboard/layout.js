import DashboardSidebar from '../components/DashboardSidebar';

export const metadata = {
	title: 'My Dashboard',
	description: 'this is dashboard with infographic content',
	keywords: 'Account, Products, Analytics'
};
// * https://blog.logrocket.com/guide-next-js-layouts-nested-layouts/#managing-layouts-next-js-app-router
// * Dynamic Layout: https://www.builder.io/blog/layouts-in-nextjs-13-visual
// * Template with Error and Loading conditions: https://blog.logrocket.com/next-js-13-app-directory/

const DashboardLayout = ({ children }) => {
	return (
		<div>
			<DashboardSidebar />
			{children}
		</div>
	);
};

export default DashboardLayout;

// * Other References & Understandings:
// * https://www.youtube.com/watch?v=R7A5vBDfZ18
// * https://www.youtube.com/watch?v=OWa-zrgteZs

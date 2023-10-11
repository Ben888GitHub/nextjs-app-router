// export const revalidate = 3;

import CSRNoAPICaching from '../components/CSRNoAPICaching';

// export const dynamic = 'force-dynamic';
// export const fetchCache = 'force-no-store';

export const metadata = {
	title: 'Caching Solution'
};

const CachingLayout = ({ children }) => {
	return (
		<>
			<CSRNoAPICaching />
			{children}
		</>
	);
};

export default CachingLayout;

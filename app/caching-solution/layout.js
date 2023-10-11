// export const revalidate = 1;

export const dynamic = 'force-dynamic';
// export const fetchCache = 'force-no-store';
export const metadata = {
	title: 'Caching Solution'
};

const CachingLayout = ({ children }) => {
	return <>{children}</>;
};

export default CachingLayout;

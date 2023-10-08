import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

const RepoCount = ({ stargazers_count, forks_count, watchers_count }) => (
	<div className="flex w-full ">
		<span className="items-center mx-auto flex">
			{' '}
			<FaStar className="mr-1" /> {stargazers_count}
		</span>
		<span className="items-center mx-auto flex">
			{' '}
			<FaCodeBranch className="mr-1" /> {forks_count}
		</span>
		<span className="items-center mx-auto flex">
			{' '}
			<FaEye className="mr-1" /> {watchers_count}
		</span>
	</div>
);
export default RepoCount;

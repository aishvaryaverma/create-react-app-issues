import { useState, useEffect } from 'react';
// redux
import { connect } from 'react-redux';
import { getIssues } from '../../redux/actions/github';
// components
import Header from '../layouts/Header';
import IssuesList from '../partials/IssuesList';

const Home = ({
	getIssues,
	issues: { loading, data }
}) => {
	const [isUpdating, setIsUpdating] = useState(false);
	const [isLoadMore, setIsLoadMore] = useState(false);
	const [state, setState] = useState({
		per_page: 30,
		page: 1,
		type: 'open'
	});
	const { per_page, page, type } = state;

	useEffect(() => {
		if(loading) getIssues({ per_page, page, type });
	// eslint-disable-next-line
	}, [loading]);

	// for page change
	useEffect(() => {
		setIsLoadMore(true);
		(async () => {
			if (page >= 2) {
				setIsUpdating(true);
				await getIssues({ per_page, page, type }, true);
				setIsUpdating(false);
			}
			setIsLoadMore(false);
		})();
	// eslint-disable-next-line
	}, [page]);

	// for scroll handle
	useEffect(() => {
		const handleScroll = () => {
			const documentTop = document.body.scrollTop || document.documentElement.scrollTop;
			const scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
			const target = (documentTop + window.innerHeight) >= scrollHeight;
			if(target && !isUpdating) {
				return setState({ ...state, page: page + 1 });
			}
		};
		document.addEventListener('scroll', handleScroll);
		return () => document.removeEventListener('scroll', handleScroll);
	// eslint-disable-next-line
	}, [isUpdating]);

	return (
		<>
			<Header />
			<IssuesList data={data} isLoadMore={isLoadMore} />
		</>
	)
}

const mapStateToProps = state => ({
	issues: state.github.issues
})

export default connect(mapStateToProps, { getIssues })(Home)

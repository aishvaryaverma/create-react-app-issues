import React from 'react';
import Spinner from '../shared/Spinner'
import utils from '../../utils';

const IssuesList = ({ data, isLoadMore }) => {

	const renderList = list => {
		if(!list) return <Spinner />;
		list = list.filter(item => item.author_association === 'NONE');
		return list.map(each => {
			const { number, url, title, user, labels, created_at, comments } = each;
			return (
				<li key={number}>
					<div className="icon"><i className="fas fa-exclamation"></i></div>
					<div className="heading">
						<a href={url}>
							{title}
						</a>
						{/* <a href="#">needs triage</a> */}
						{labels.length > 0 && (
							<span className="badges">
								{labels.map(each => {
									const { id, url, name, color } = each;
									if(name.includes('needs triage')) {
										return <a key={id} href={url} style={{ background: '#'+color, color: 'white' }}>{name}</a>
									} else {
										return <a key={id} href={url} style={{ background: '#'+color }}>{name}</a>
									}
								})}
							</span>
						)}
					</div>
					<p>#{number} opened {utils.timeSince(created_at)} by <a href={`https://github.com/facebook/create-react-app/issues/created_by/${user.login}`}>{user.login}</a></p>
					{comments !== 0 && (
						<div className="comments">
							<i className="far fa-comment-alt"></i>
							<span>{comments}</span>
						</div>
					)}
				</li>
			)
		});
	}
	
	return (
		<div className="container">
			<div className="issuesList">
				<div className="issuesList__header">
					<ul>
						<li>
							<div className="icon"><i className="fas fa-exclamation"></i></div>
							<div className="text">649 Open</div>
						</li>
						<li>
							<div className="icon"><i className="fas fa-check"></i></div>
							<div className="text">5796 Closed</div>
						</li>
					</ul>
				</div>

				<div className="issuesList__body">
					<ul>
						{renderList(data)}
					</ul>
					{isLoadMore && data !== null && <Spinner />}
				</div>
			</div>
		</div>
	)
}

export default IssuesList

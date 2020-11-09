import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateAction } from '../../redux/actions/github';

const Header = ({ actions: { watch, star, fork }, updateAction }) => {
	const [isStared, setIsStared] = useState(false);

	const onClick = (type) => {
		console.log(type)
		if(type === 'WATCH') return updateAction(type, watch+1);
		else if(type === 'FORK') return updateAction(type, watch+1);
		else if(type === 'STAR') {
			setIsStared(true);
			updateAction(type, star+1)
		}
	};

	return (
		<div className="headerMain">
			<div className="headerMain__top">
				<div className="headerMain__grid">
					<div className="headerMain__menu">
						<i className="fas fa-bars"></i>
					</div>
					
					<div className="headerMain__logo">
						<i className="fab fa-github"></i>
					</div>
					
					<div className="headerMain__notifictions">
						<i className="far fa-bell"></i>
					</div>
				</div>
			</div>

			<div className="headerMain__bottom">
				<div className="headerMain__grid">
					<div className="appRepoName">
						<i className="fas fa-align-left"></i>
						<span className="color">facebook</span>
						<span>/</span>
						<span className="color bold">create-react-app</span>
					</div>
					
					<div className="actionButtons">
						<button className="button" onClick={e => onClick('WATCH')}>
							<span><i className="far fa-eye"></i> Watch</span>
							<span className="white">{watch}</span>
						</button>
						<button className="button" onClick={e => onClick('STAR')}>
							<span><i className="far fa-star"></i> {!isStared ? 'Star': 'Unstar'}</span>
							<span className="white">{star}</span>
						</button>
						<button className="button" onClick={e => onClick('FORK')}>
							<span><i className="fas fa-code-branch"></i> Fork</span>
							<span className="white">{fork}</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	actions: state.github.actions
})

export default connect(mapStateToProps, { updateAction })(Header)

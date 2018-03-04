import React from 'react';
import Sidebar from './sidebar';
import SingleEmail from './single-email';
import EmailList from './email-list';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './email.css';

export default class Email extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			folderId: 'inbox',
			emailId: 0
		};
	}

	setFolderId(str) {
		this.setState({folderId: str})
	}

	setEmailId(num) {
		this.setState({ emailId: num })
	}

	render() {
		return (
			<Router>
				<div className="email">
					<Sidebar setFolderId={(str) => this.setFolderId(str)} 
						setEmailId={(num) => this.setEmailId(num)}
					/>
					<main>
						<Route exact path='/' render={() => <EmailList folderId={this.state.folderId} />} />
						<Route exact path='/inbox' render={() => <EmailList folderId={this.state.folderId} />} />
						<Route exact path='/spam' render={() => <EmailList folderId={this.state.folderId} />} />

						{/* <EmailList folderId={this.state.folderId}/> */}
						<Route exact path='/:folderId/:emailId' 
							render={() => {
								return (
									<SingleEmail folderId={this.state.folderId} 
										emailId={this.state.emailId} />
								)}
							} 
						/>
					</main>
				</div>
			</Router>
		);
	}
}
import React from 'react';
import Sidebar from './sidebar';
import SingleEmail from './single-email';
import EmailList from './email-list';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './email.css';

export default class Email extends React.Component {
	render() {
		return (
			<Router>
				<div className="email">
					<Sidebar/>
					<main>
						<Route exact path='/' render={() => <EmailList folderId="inbox" />} />
						<Route exact path='/inbox' render={() => <EmailList folderId="inbox" />} />
						<Route exact path='/spam' render={() => <EmailList folderId="spam" />} />

						{/* <EmailList folderId={this.state.folderId}/> */}
						{/* <SingleEmail folderId="inbox" emailId="1" /> */}
					</main>
				</div>
			</Router>
		);
	}
}
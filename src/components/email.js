import React from 'react';
import Sidebar from './sidebar';
import SingleEmail from './single-email';
import EmailList from './email-list';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './email.css';

export default function Email() {
	return (
		<Router>		
			<div className="email">
				<Sidebar />
				<main>
					<Route exact path="/" render={() => <EmailList folderId="inbox" />} />
					{/* <SingleEmail folderId="inbox" emailId="1" /> */}
				</main>
			</div>
		</Router>
	);
}

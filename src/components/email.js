import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from './sidebar';
import SingleEmail from './single-email';
import EmailList from './email-list';
import './email.css';

export default function Email() {
	return (
		<Router>
			<div className="email">
				<Sidebar />
				<main>
					<Route exact path='/' render={() => <EmailList folderId="inbox"/>} />
					<Route exact path='/:folderId' component={Child} />
					{/* <SingleEmail folderId="inbox" emailId="1" /> */}
				</main>
			</div>
		</Router>
	);
}

const Child = ({match}) => {
	return (
		<EmailList folderId={match.params.folderId}/>
	)
}
import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
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
    			<Route exact path="(/|/inbox)" render={() => <EmailList folderId="inbox" />} />
					<Route exact path="/spam" render={() => <EmailList folderId="spam" />} />
					
    			<Route exact path="/:folderId/messages/:emailId" render={() => {
						return <SingleEmail folderId="inbox" emailId="1" />
					}}/>
					{/* <SingleEmail folderId="inbox" emailId="1" /> */}
    		</main>
  		</div>
		</Router>
	);
}

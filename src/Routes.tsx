/** @format */

import React, { PureComponent } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { LoginView } from './modules/user/LoginView';
import { RegisterView } from './modules/user/RegisterView';
import { MeView } from './modules/user/MeView';

export class Routes extends PureComponent {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/login" component={LoginView}></Route>
					<Route path="/register" component={RegisterView}></Route>
					<Route path="/me" component={MeView}></Route>
				</Switch>
			</Router>
		);
	}
}

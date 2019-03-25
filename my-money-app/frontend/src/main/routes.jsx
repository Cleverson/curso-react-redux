import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import AuthOrApp from './authOrApp'
import Dashboard from '../dashboard/dashboard'
// import Dashboard from '../dashboard2/dashboard2'
import BillingCycle from '../billingCycle/billingCycle'

const Routes = props => {
	return (
		<Router history={hashHistory}>
			<Route path="/" component={AuthOrApp}>
				<IndexRoute component={Dashboard} />
				<Route path="billingCycles" component={BillingCycle} />
			</Route>
			<Redirect from="*" to="/" />
		</Router>
	)
}

export default Routes

import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from '../dashboard/dashboardReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'
import AuthReducer from '../auth/authReducer'

import TabReducers from '../common/tab/tabReducers'

const rootReducer = combineReducers({
	dashboard: DashboardReducer,
	tab: TabReducers,
	billingCycle: BillingCycleReducer,
	form: formReducer,
	toastr: toastrReducer,
	auth: AuthReducer
})

export default rootReducer

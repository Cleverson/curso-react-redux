import React from 'react'
import { HashRouter } from 'react-router-dom'

import Routes from './routes'

import SideBar from '../common/template/sideBar'
import Header from '../common/template/header'
import Footer from '../common/template/footer'
import Messages from '../common/msg/messages'

const App = props => {
	return (
		<HashRouter>
			<div className="wrapper">
				<Header />
				<SideBar />
				<Routes />
				<Footer />
				<Messages />
			</div>
		</HashRouter>
	)
}

export default App

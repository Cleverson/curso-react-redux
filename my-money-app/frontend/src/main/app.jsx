import React from 'react'

import '../common/template/dependencies'

import Routes from './routes'

import SideBar from '../common/template/sideBar'
import Hearder from '../common/template/header'
import Footer from '../common/template/footer'

const App = () => {
	return (
		<div className="wrapper">
			<Hearder />
			<SideBar />
			<div className="content-wrapper">
				<Routes />
			</div>
			<Footer />
		</div>
	)
}

export default App

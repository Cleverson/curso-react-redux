import React from 'react'

import SideBar from '../common/template/sideBar'
import Hearder from '../common/template/header'
import Footer from '../common/template/footer'
import Messages from '../common/msg/messages'

const App = props => {
	return (
		<div className="wrapper">
			<Hearder />
			<SideBar />
			<div className="content-wrapper">{props.children}</div>
			<Footer />
			<Messages />
		</div>
	)
}

export default App

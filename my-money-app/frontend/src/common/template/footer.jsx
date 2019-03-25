import React from 'react'

const Footer = props => {
	const now = new Date()
	return (
		<footer className="main-footer">
			<strong>
				Copyright &copy; {now.getFullYear()}
				<a href="http://empresa.com.br" target="_blank">
					{' '}
					EMPRESA
				</a>
			</strong>
		</footer>
	)
}

export default Footer

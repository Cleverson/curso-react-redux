import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = props => {
    return (
        <aside className="menu-area">
            <nav className="menu">
                {/* Refotorar em casa */}
                <Link to="/">
                    <i className="fa fa-home" />
                    Início
                </Link>
                <Link to="/users">
                    <i className="fa fa-users" />
                    Usuário
                </Link>
            </nav>
        </aside>
    )
}

export default Nav

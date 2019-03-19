import React from 'react'

const MenuItem = props => {
    return (
        <li>
            <a href={props.path}>
                <i className={`fa fa-${props.icon}`} />{' '}
                <span>{props.label}</span>
            </a>
        </li>
    )
}

export default MenuItem

import React from 'react'

const member = props => {
    return (
        <div>
            {props.name} <strong>{props.lastName}</strong>
        </div>
    )
}

export default member

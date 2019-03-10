import React from 'react'

const family = props => (
    <div>{React.cloneElement(props.children, { ...props })}</div>
)

export default family

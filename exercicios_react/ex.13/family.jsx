import React from 'react'

const family = props => (
    <div>
        {React.Children.map(props.children, child =>
            React.cloneElement(child, { ...props })
        )}
    </div>
)

export default family

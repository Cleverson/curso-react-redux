import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'

const family = props => <div>{childrenWithProps(props.children, props)}</div>
export default family

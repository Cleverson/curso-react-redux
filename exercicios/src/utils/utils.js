import { Children, cloneElement } from 'react'

export const childrenWithProps = props => {
	return Children.map(props.children, child => {
		return cloneElement(child, {
			...props,
			...child.props
		})
	})
}

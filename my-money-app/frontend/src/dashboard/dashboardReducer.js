const INITIAL_STATE = {
	sumary: { credit: 0, debt: 0 }
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case typeName:
			return { ...state, ...payload }

		default:
			return state
	}
}

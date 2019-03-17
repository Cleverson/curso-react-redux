export const changeValue = e => {
    console.log('ChangeValue')
    return {
        type: 'VALUE_CHANGED',
        payload: e.target.value
    }
}

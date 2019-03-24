import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'

import { showTabs, selectTab } from '../common/tab/tabActions'
import { BILLING_CYCLES_FETCHED } from './billingCycleTypes'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = { credits: [{}], debts: [{}] }

export const getList = () => {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: BILLING_CYCLES_FETCHED,
        payload: request
    }
}

export const create = values => {
    return submit(values, 'post')
}

export const update = values => {
    return submit(values, 'put')
}

export const remove = values => {
    return submit(values, 'delete')
}

const submit = (values, method) => {
    const id = values._id ? values._id : ''
    return dispatch => {
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(res => {
                toastr.success('Sucesso', 'Operação realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error =>
                    toastr.error('Erro', error)
                )
            })
    }
}

export const showUpdate = billingCycle => {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export const showDelete = billingCycle => {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export const init = () => {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}

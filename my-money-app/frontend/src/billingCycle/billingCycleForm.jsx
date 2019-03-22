import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from './billingCycleActions'

import LabelAndInput from '../common/form/labelAndInput'

export class BillingCycleForm extends Component {
    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field
                        name="name"
                        component={LabelAndInput}
                        label="Nome"
                        cols="12 4"
                        placeholder="Informe o Nome..."
                    />
                    <Field
                        name="month"
                        type="number"
                        component={LabelAndInput}
                        label="Mês"
                        cols="12 4"
                        placeholder="Informe o Mês..."
                    />
                    <Field
                        name="year"
                        type="number"
                        component={LabelAndInput}
                        label="Ano"
                        cols="12 4"
                        placeholder="Informe o Ano..."
                    />
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    <button
                        type="button"
                        className="btn btn-default"
                        onClick={this.props.init}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({
    form: 'billingCycleForm',
    destroyOnUnmount: false
})(BillingCycleForm)

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(BillingCycleForm)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from './billingCycleActions'

import LabelAndInput from '../common/form/labelAndInput'
import ItemList from './itemList'
import Summary from './summary'

export class BillingCycleForm extends Component {
    calculateSummary = () => {
        const sum = (t, v) => t + v
        return {
            sumOfCredits: this.props.credits
                .map(c => +c.value || 0)
                .reduce(sum),
            sumOfDebts: this.props.debts
            .map(d => +d.value || 0)
            .reduce(sum)
        }
    }
    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props
        const { sumOfCredits, sumOfDebts } = this.calculateSummary()
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field
                        name="name"
                        component={LabelAndInput}
                        readOnly={readOnly}
                        label="Nome"
                        cols="12 4"
                        placeholder="Informe o Nome..."
                    />
                    <Field
                        name="month"
                        type="number"
                        component={LabelAndInput}
                        readOnly={readOnly}
                        label="Mês"
                        cols="12 4"
                        placeholder="Informe o Mês..."
                    />
                    <Field
                        name="year"
                        type="number"
                        component={LabelAndInput}
                        readOnly={readOnly}
                        label="Ano"
                        cols="12 4"
                        placeholder="Informe o Ano..."
                    />
                    <Summary credit={sumOfCredits} debt={sumOfDebts} />
                    <ItemList
                        cols="12 6"
                        readOnly={readOnly}
                        list={credits}
                        field="credits"
                        legend="Créditos"
                    />
                    <ItemList
                        cols="12 6"
                        readOnly={readOnly}
                        list={debts}
                        field="debts"
                        legend="Débitos"
                        showStatus={true}
                    />
                </div>
                <div className="box-footer">
                    <button
                        type="submit"
                        className={`btn btn-${this.props.submitClass}`}
                    >
                        {this.props.submitLabel}
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

const selector = formValueSelector('billingCycleForm')

const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BillingCycleForm)
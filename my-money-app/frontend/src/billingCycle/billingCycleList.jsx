import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getList, showUpdate, showDelete } from './billingCycleActions'

export class BillingCycleList extends Component {
    componentWillMount = () => {
        this.props.getList()
    }

    renderRow = () => {
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td>
                    <button
                        className="btn btn-warning"
                        onClick={() => this.props.showUpdate(bc)}
                    >
                        <i className="fa fa-pencil" />
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => this.props.showDelete(bc)}
                    >
                        <i className="fa fa-trash-o" />
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Nome</td>
                            <td>Mês</td>
                            <td>Ano</td>
                            <td className="table-actions">Ações</td>
                        </tr>
                    </thead>
                    <tbody>{this.renderRow()}</tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.billingCycle.list })

const mapDispatchToProps = dispatch =>
    bindActionCreators({ getList, showUpdate, showDelete }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BillingCycleList)

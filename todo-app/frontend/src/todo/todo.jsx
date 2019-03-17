import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

class todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: '',
            list: []
        }

        this.refresh()

        // Usa-se o bind caso não seja uma função arrow
        // this.handleAdd = this.handleAdd.bind(this)
    }

    // Lista todas tarefas ordenadas pela data de criação
    refresh = (description = '') => {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`).then(res => {
            this.setState({
                ...this.state,
                description,
                list: res.data
            })
        })
    }

    // Botão Pesquisa
    handleSearch = () => {
        this.refresh(this.state.description)
    }

    // Botão de limpar
    handleClear = () => {
        this.refresh()
    }

    // onChange do input
    handleChange = e => {
        this.setState({ ...this.state, description: e.target.value })
    }

    // Add Todo
    handleAdd = () => {
        const description = this.state.description
        axios.post(URL, { description }).then(res => {
            this.refresh()
        })
    }
    // Remove Todo
    handleRemove = todo => {
        axios
            .delete(`${URL}/${todo._id}`)
            .then(res => this.refresh(this.state.description))
    }

    // Marca o todo como feito
    handleMarkAsDone = todo => {
        axios
            .put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(res => this.refresh(this.state.description))
    }

    // Marca o todo como pendente
    handleMarkAsPending = todo => {
        axios
            .put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(res => this.refresh(this.state.description))
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                />
                <TodoList
                    list={this.state.list}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleRemove={this.handleRemove}
                />
            </div>
        )
    }
}

export default todo

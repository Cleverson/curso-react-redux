import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

const todoForm = props => {
    const keyHandler = e => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }
    return (
        <div role="form" className="todoForm">
            <Grid cols="12 9 10">
                <input
                    type="text"
                    id="description"
                    className="form-control"
                    placeholder="Adicione uma tarefa..."
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    value={props.description}
                />
                <small id="description" class="form-text text-muted">
                    Teclas de atalho: ENTER - Novo Cadastro, SHIFT + ENTER -
                    Pesquisa, ESCAPE - Limpa
                </small>
            </Grid>
            <Grid cols="12 3 2">
                <IconButton
                    style="primary"
                    icon="plus"
                    onClick={props.handleAdd}
                />
                <IconButton
                    style="info"
                    icon="search"
                    onClick={props.handleSearch}
                />
                <IconButton
                    style="default"
                    icon="close"
                    onClick={props.handleClear}
                />
            </Grid>
        </div>
    )
}

export default todoForm

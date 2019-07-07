import React, { Component } from "react";
import TodoItems from '../TodoItems';

class TodoList extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            tarefa: '',
            items: []
        };
        this.adicionarItem = this.adicionarItem.bind(this);
        this.deleteitem    = this.deleteitem.bind(this);
        this.log           = this.log.bind(this);
    }

    deleteitem(key){
        console.log('Item a ser deletado: ' + key);
        let filtro = this.state.items.filter( (item) => { /**fILTRO ELIMINA O ITEM DA LISTA QUE VEM POR PARAMETRO DA */
            return(item.key !== key);                     /** ../TodoItems essa KEY eh passada por PROPS la do arquivo ../TodoItems/index.js*/       
        });

        this.setState({items: filtro});
    }

    log(){
        console.log(this.state.items);
    }

    adicionarItem(evento){
        let state = this.state;
        if(this._tarefaInput.value !== ''){
            let newItem = {
                text: this._tarefaInput.value, 
                key: Date.now()
            };
            this.setState({ items: [...state.items, newItem]} );
        }
        
        this.setState({tarefa: ''});

        evento.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.adicionarItem}>
                    <input type="text" placeholder="Nova Tarefa" name="tarefa" 
                    value={this.state.tarefa} onChange={(evento) => this.setState({tarefa: evento.target.value})}
                    ref={(evento) => this._tarefaInput = evento}  />
                    <button type="submit">
                        Adicionar
                    </button>
                </form>    
                {<button onClick={this.log}>LOG</button>}
                {/** Abaixo eh chamado o arquivo indec TodoItens, nele eh passado por props a State com Array de Itens
                     ao mesmo tempo eh criada a prop Delete que chama do deleteItem, essa prop delete eh chamada la no arquivo
                     TodoItems quando o usuario clica em cima do item da lista*/}
                <TodoItems lista={this.state.items} delete={this.deleteitem}/>
            </div>
        )
    }    
}

export default TodoList;

/*Usando STATES MEMBRO INDEX*/
import React, { Component } from 'react';

class Membro extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: props.nome
        };
        this.entrar = this.entrar.bind(this);
        this.sair   = this.sair.bind(this);
    }

    sair(){
        this.setState({nome: "Visitante"});
    }
    
    entrar(nomeDoCidadao) {
        let state = this.state;
        state.nome = nomeDoCidadao;
        this.setState(state);      
    }
    
    render(){
        return(
            <div>
                 <h2>Bem Vindo(a) {this.state.nome}</h2>
                 <button onClick={/*Funcao anonima para passar parametros em funcoes*/ () => this.entrar("Juvenal")} > 
                     Entrar como Daniel
                 </button>
                 <button onClick={this.sair} >
                     Sair
                 </button>
            </div>
        )
    }
}

export default Membro;
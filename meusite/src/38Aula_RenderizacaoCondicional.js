/*Rederizacao condicional*/
import React, { Component } from "react";
import Membro from './components/Membro'
import { stat } from "fs";

/*Aqui criamos uma class a chamadora principal*/ 
class App extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            status: true
        }
        this.sair   = this.sair.bind(this);
        this.entrar = this.entrar.bind(this);
    }
    
    sair(){
        let state = this.state;
        state.status = false;
        this.setState(state);
    }

    entrar(){
        let state = this.state;
        state.status = true;
        this.setState(state);
    }

    render(){
        return(
            <div>   
                {this.state.status ? 
                <div>
                    <h2>BEM VINDO AO SISTEMA MANOLO</h2>
                    <button onClick={this.sair}> Sair </button>
                </div> :
                <div>
                    <h2>Ola Visitante tudo bem com voce? Faca o Login.......</h2>
                    <button onClick={this.entrar}> Entrar </button>
                </div> 
                } 
            </div>
        )
    }    
}

export default App;

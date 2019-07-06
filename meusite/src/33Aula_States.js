/*Compomet Class USANDO STATES MUTAVEIS QUE TROCAM DE ESTADOS NA PAGINA*/
import React, { Component } from "react";

/*Aqui criamos uma class a chamadora principal*/ 
class App extends Component{
    
    diminuir(){
        console.log("Diminuiu");
        let state = this.state;
        state.contador -= 1;
        state.nome = "Daniel";
        if(state.contador < 0){
            alert('CONTADOR NAO PODE SER MENOR QUE ZERO MEU JOVEM');
            return;
        }   
        this.setState(state);
    }

    aumentar(){

        console.log('Aumentou!!!');
        let state = this.state;
        state.contador += 1;
        state.nome = "JOAO";
        this.setState(state);
    }
    /** As states ficam dentro do contructor, sao as variavies que irao variar de acordo com o que voce queria meu jovem padauan */
    constructor(props){

        super(props);
        this.state = {
            nome: 'Daniel Tokarski',
            contador: 0
        };
        this.aumentar = this.aumentar.bind(this); /*Para que a Funcao seja reconhecida pelo construtor caso contrario nao reconhece*/
        this.diminuir = this.diminuir.bind(this);
    }

    render(){
        return(
            <div>   
                <h1>CONTADOR</h1>
                <h3>
                    <button onClick={this.diminuir}> - </button>
                    {this.state.nome}
                    {this.state.contador}
                    <button onClick={this.aumentar}> + </button>
                </h3>
            </div>
        )
    }    
}

export default App;

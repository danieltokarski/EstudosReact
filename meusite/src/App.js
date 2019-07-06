/*FORMULARIOS */
import React, { Component } from "react";

/*Aqui criamos uma class a chamadora principal*/ 
class App extends Component{
    
       /** As states ficam dentro do contructor, sao as variavies que irao variar de acordo com o que voce queria meu jovem padauan */
    constructor(props){

        super(props);
        this.state = {
            email: 'daniel.tokarski@hotmail.com',
            senha: '12343',
            sexo: 'Masculino'
        };
        this.trocaEmail = this.trocaEmail.bind(this);
        this.trocaSexo  = this.trocaSexo.bind(this);
    }

    trocaEmail(evento){
        let valorDigitado = evento.target.value;
        this.setState({email: valorDigitado})
    }   
    trocaSexo(evento){
        let valorDigitado = evento.target.value
        this.setState({sexo: valorDigitado});
    }
    render(){
        return(
            <div>   
                <h2>LOGIN NO SISTEMA</h2>
                Email: 
                <input type="email" name="email" value={this.state.email} onChange={this.trocaEmail}></input><br></br>
                Senha:
                <input type="password" name="senha" value={this.state.senha} onChange={(evento) => this.setState({senha: evento.target.value})}></input>
                <br></br>
                Sexo:
                <select name="sexo" value={this.state.sexo} onChange={this.trocaSexo}>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino" >Feminino</option>
                </select>
                <h2>Mudanca State Email: {this.state.email}</h2>
                <h2>Mudanca State Senha: {this.state.senha}</h2>
                <h2>Mudanca State Sexo.: {this.state.sexo}</h2>

            </div>
        )
    }    
}

export default App;

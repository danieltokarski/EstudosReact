/*Compomet Class COM PROPS FIXAS*/
import React, { Component } from "react";

class Equipe extends Component{
    render(){
        return(
            <div>
                <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>    
                <hr/>
            </div>
        )
    }    
}

class Sobre extends Component{
    render(){
        return(
            <div>
                <h2>Ola eu sou o {this.props.nome}</h2> 
                <h3>Cargo: {this.props.cargo}</h3>
                <h3>Idade: {this.props.idade} anos</h3>
            </div>
        )
    }
}

function App(){
    return(
        <div>
            <Equipe nome="FABIO OLIVERA" cargo="Programador Piton" idade="35"/>            
            <Equipe nome="EDUARDO BOI" cargo="Programador Piton" idade="50"/>            
        </div>
    )
}

export default App;

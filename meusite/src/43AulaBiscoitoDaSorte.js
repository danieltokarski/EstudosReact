/** APP Biscoite da Sorte */
import React, { Component } from "react";
import './estilo.css';

/*Aqui criamos uma class a chamadora principal*/ 
class App extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            textoFrase: 'Frase Aleatoria......'
        };
        
        this.frases = ["Os ultimos serao os primeiros and vice versa!",
                       "Deus eh bom, mereça essa bondade.",
                       "A vida nao eh facil, não torne-a mais dificil.",
                       "Eh aprendendo que se aprende!"];
        this.quebraBiscoito = this.quebraBiscoito.bind(this);
    }

    quebraBiscoito(){
        let varstate = this.state; /*Acessando states*/
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        varstate.textoFrase = '" ' + this.frases[numeroAleatorio] + '"';
        this.setState(varstate);
    }

    render(){
        return(
            <div className="container">   
                <img className="img" src={require('./assets/biscoito.png')}></img>
                <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito}/>
                <h3 className="textoFrase">{this.state.textoFrase}</h3>
            </div>
        )
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}> {this.props.nome}</button>
            </div>
        )
    }
}
export default App;

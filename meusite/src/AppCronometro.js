/** Cronometro
 * 
 */
import React, { Component } from "react";
import Feed from './estilo.css';

/*Aqui criamos uma class a chamadora principal*/ 
class App extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            numero: 0,
            vai: 'VAI'   
        };
        this.timer  = null;
        this.vai    = this.vai.bind(this);
        this.limpar = this.limpar.bind(this);
    }   

    vai(){
        let state = this.state;
        if (this.timer !== null){ 
            clearInterval(this.timer);
            this.timer = null; 
            state.vai  = 'VAI';
            this.setState(state);
        }else{ 
            /** Set inteval muito util, pois ele executa o codigo a cada intervalo de tempo que voce define nele */
            this.timer = setInterval(() => {
                state.numero += 0.1;
                state.vai     = 'PAUSAR';
                this.setState(state);
            }, 100);
        }    
        
    }

    limpar(){
        if (this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
        }
        let state    = this.state;
        this.timer   = null;
        state.numero = 0;
        state.vai    = 'VAI';
        this.setState(state);
    }

    render(){
        return(
            <div className="container">   
                <img className="img" src={require('./assets/cronometro.png')}></img>
                <h1 className="timer">{this.state.numero.toFixed(1)}</h1>
                <div className="areaBtn">
                    <a className="botao" onClick={this.vai}>{this.state.vai}</a>
                    <a className="botao" onClick={this.limpar}>LIMPAR</a>
                </div>
            </div>
        )
    }    
}

export default App;

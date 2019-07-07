/** CICLOS DE VIDAS DO STATE */
import React, { Component } from "react";

/*Aqui criamos uma class a chamadora principal*/ 
class App extends Component{
    
    /** As states ficam dentro do contructor, sao as variavies que irao variar de acordo com o que voce queria meu jovem padauan */
    
    /** ESTAGIO 01 - PRIMEIRAMENTE EH MONTADO O CONTRUTOR - ESTAGIO 01 */
    constructor(props){

        super(props);
        this.state = {
            hora: '00:00:00'
        };
    }

    /** ESTAGIO 02 - APOS O CONSTRUTOR SER MONTADO A FUNCAO ABAIXO EH CHAMADA NELA EU ESTOU INCIANDO O RELOGIO HEHEHEHEHEHEHHE*/
    componentDidMount(){
        /*Vamos girar o relogio aqui */
        setInterval(()=>{
            this.setState({ hora: new Date().toLocaleTimeString() })    
            }, 1000);
    }       

    /** ESTAGIO 03 - COMO EU SETEI O RELOGIO TODA A VEZ ELE SERA EXECUTADO, SENDO ASSIM A PAGINA EH ALTERADA ENTAO A FUNCAO ABAIXO EH CHAMADA */
    componentDidUpdate(){
        console.log('Atualizou!!!');
    }

    /** ESTAGIO 04 - ESTE COMPONENTE DEVE ATUALIZAR?? AI VOCE RETORNAR UM TRUE OU FALSE, AQUI POSSO PARAR O MEU RELOGIO OU NAO */
    shouldComponentUpdate(){
        return true;
    }

    render(){
        return(
            <div>   
                <h1>MEU PROJETO {this.state.hora}</h1>
                <h3>
                </h3>
            </div>
        )
    }    
}

export default App;

/** Requisicoes HTTP */
import React, { Component } from "react";
import './css/estiloBlog.css';

class App extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            nutri: [] 
        };
    }

    /*Vamos chamar fazer uma requisicao de uma API que retornar um Json, vamos chamar dentro do didmount que eh montado logo que inicia a aplicacao*/
    componentDidMount(){
        fetch('https://sujeitoprogramador.com/rn-api/?api=posts') /* Dados vieram desta URL com Fectch */
        .then((respostaFetch) => respostaFetch.json())  /** Deu sucesso, conversao para JSON */
        .then((json) => { /**Se der sucesso na tranformacao acima cai neste then aqui */
            let state = this.state; /** Em seguida passa o json para nossa state que sera utulizada abaixo*/
            state.nutri = json;
            this.setState(state); 
            console.log(json);
        });

    }

    render(){
        return(
            <div className="container">     
                <header className="header">
                    <strong>REACT NUTRI</strong>
                </header>
                {this.state.nutri.map((item) => { /** Map com o ARRAY Nutri */
                    return(
                        <article key={item.id} className="post">
                            <strong className="title">{item.titulo}</strong>
                            <img src={item.capa} className="cape"></img>
                            <p className="subtitle">{item.subtitulo}</p>
                            <a className="btn" href="#">Acessar</a>
                        </article>
                    );
                })}
            </div>
        )
    }    
}

export default App;

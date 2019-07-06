/** LISTASSSSSSS */
import React, { Component } from "react";
import Feed from './components/Feed';

/*Aqui criamos uma class a chamadora principal*/ 
class App extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            feed:[
                {id: 1, username: 'Daniel', curtidas:10, comentarios:2},
                {id: 2, username: 'Joao', curtidas:15, comentarios:200},
                {id: 3, username: 'Amanda', curtidas:1005, comentarios:510},
                {id: 4, username: 'Maria', curtidas:1, comentarios:1},
            ]
        };
    }

    render(){
        return(
            <div>   

                {this.state.feed.map((item) => { /** VARRENDO O ARRAY COM A FUNCAO MAP QUE RECEBE UMA FUNCAO ANONIMA, O MAP VAI PASSAR OBJETO POR OBJETO E PASSAR DENTRO DO ITEM */
                    return(
                        <Feed key={item.id} username={item.username} 
                              curtidas={item.curtidas} comentarios={item.comentarios}
                              />
                    )
                })}
            </div>
        )
    }    
}

export default App;

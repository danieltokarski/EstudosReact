import React, { Component } from "react";
import Membro from './components/Membro'

/*Aqui criamos uma class a chamadora principal*/ 
class App extends Component{
    
    render(){
        return(
            <div>   
                 <Membro nome="Visitante"/>
            </div>
        )
    }    
}

export default App;


import React from 'react';
//const Bemvindo = () => <h2>Bem Vindo amiginho tudo bem com voce?</h2> /*Componeten Burro StateLess*/  Primeira Forma
const Equipe   = (props) => {
    return(
        <div>
            <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} />
            <hr/>           
            <Social fb={props.facebook}/>
        </div>
    )
};

const Sobre = (props) => {
    return(
        <div>
             <h2>Ola sou {props.nome}</h2>
             <h3>Cargo: {props.cargo}</h3>
             <h3>Idade: {props.idade}</h3>
        </div>
    )
}

const Social = (props) => {
    return(
        <div>
            <a href={props.fb}>Facebook </a>
            <br></br>
            <a>Linkedin: </a>
            <a>Youtube: </a>
        </div>
    )
}

/** 
var Bemvindo = (nomeQuaquer/-Deve ser props-/) => {
    return(
        <div>
            <h1>HELLO, WELCOME {nomeQuaquer.nome}</h1>
            <h3>I am {nomeQuaquer.idade} years old</h3>
        </div>
    )
} 
*/

function App(){
    return( 
        /**
        <div>
            <Bemvindo nome="Daniel Tokarski" idade="28"/>
            <Bemvindo nome="Livian Petters"  idade="20"/>       
            <h1>OLA MUNDAO DE DEUS</h1>
        </div>
        **/
        <div>
            <h1>Conheca nossa equipe:</h1>
            <Equipe nome="Daniel Tokarski" cargo="Programador em Progress" idade="27" facebook="https://google.com"/>    
            <Equipe nome="Juvenal" cargo="Programador em Progress" idade="57" facebook="https://google.com"/>    
        
        </div>
    );
}

export default App; /*Para que seja possivel acessa-lo em outro lugar*/
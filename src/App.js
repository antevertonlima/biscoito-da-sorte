import React, { Component } from 'react';
import './estilo.css';
import biscoito from './assets/biscoito.png';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            textoFrase: ''
        }

        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.frases = [
            "A friend's frown is better than a fool's smile.",
            "A friend in need is a friend indeed.",
            "A friend is easier lost than found.",
            "A friend to everybody is a friend to nobody.",
            "A problem shared is a problem halved.",
            "A true friend is someone who reaches for your hand, but touches your heart.",
            "False friends are worse than open enemies.",
            "Flattery is all right so long as you don't inhale.",
            "Give credit where credit is due.",
            "Grief divided is made lighter.",
            "Memory is the treasure of the mind.",
            "Nothing dries sooner than a tear.",
            "Old friends and old wine are best.",
            "The best of friends must part.",
            "The best things are not bought and sold.",
            "There is no better looking-glass than an old friend.",
            "To err is human (To forgive divine).",
            "Two cannot fall out if one does not choose.",
            "A loveless life is a living death.",
            "Absence makes the heart grow fonder.",
            "All's fair in love and war.",            
        ];
    }

    quebraBiscoito(){
        let state = this.state;
        let numeroRandom = Math.floor(Math.random() * this.frases.length);

        state.textoFrase = '" ' +this.frases[numeroRandom] + ' "';
        this.setState(state);
    }

    render(){
        return(
            <div className="container">
                <img className="img" src={biscoito} alt="biscoito" />
                <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito}/>
                <h3 className="textoFrase">{this.state.textoFrase}</h3>
            </div>
        );
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>
        );
    }
}

export default App;
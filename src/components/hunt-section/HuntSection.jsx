
import React, { Component } from "react";
import axios from 'axios';
import Pokemon from "../pokemon/Pokemon";
import "./HuntSection.css";

class HuntSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPokemon: undefined,
            searching: false
        };
    }

    _setPokemon(pokemon) {
        this.setState({ ...this.state, currentPokemon: pokemon });
        this.setState({ ...this.state, searching: false });
    }

    _search() {
        this._setPokemon(undefined);
        this.setState({ ...this.state, searching: true });
        axios.get('https://pokeapi.co/api/v2/pokemon').then(info => {
            const number = Math.floor(Math.random()*info.data.count) + 1;
            axios.get('https://pokeapi.co/api/v2/pokemon/'+number).then(pokemon => {
                if(pokemon && pokemon['data']) {
                    this._setPokemon(pokemon.data);
                } else {
                    this._setPokemon(undefined);
                }
            }).catch(error => {
                this._setPokemon(undefined);
                console.log(error);
            });    
        }).catch(error => {
            this._setPokemon(undefined);
            console.log(error);
        });
    }

    _capture() {
        this.props.capturePokemon(this.state.currentPokemon);
    }

    render() {
        return (
            <section className="hunt-background">
                <button className="hunt-left-button" type="button" onClick={this._search.bind(this)}>procurar</button>
                { !!this.state.currentPokemon ?
                    <div>
                        <div className="hunt-current-pokemon"><Pokemon pokemon={this.state.currentPokemon} index={this.state.currentPokemon.id} /></div>
                        <p className="hunt-text">Um pokemon selvagem apareceu!</p>
                        <button className="hunt-right-button" type="button" onClick={this._capture.bind(this)}>capturar</button>
                    </div>
                : this.state.searching ? <p className="hunt-text">Caçando...</p>
                : <p className="hunt-text">Nenhum pokemon encontrado... =/</p> }
            </section>
        );
    }
}

export default HuntSection;


import React, { Component } from "react";
import grass from "../../assets/image/grass.png";
// import Pokemon from "../pokemon/Pokemon";

class HuntSection extends Component {

    // constructor(props) {
    //     super(props);
    // }

    _search(event) {
        console.log(event);
    }

    _capture(event) {
        console.log(event);
        const aux = {
            name: 'bulbasaur',
            sprites: {
                front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            }
        };
        this.props.capturePokemon(aux);
    }

    render() {
        return (
            <section>
                {/* <button type="button" onClick={this._search.bind(this)}>procurar</button> */}
                {/* <img src={grass} alt="grama" /> */}
                {/* <Pokemon /> */}
                {/* <p>Um pokemon selvagem apareceu!</p> */}
                <button type="button" onClick={this._capture.bind(this)}>capturar</button>
            </section>
        );
    }
}

export default HuntSection;

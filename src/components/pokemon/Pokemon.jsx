
import React, { Component } from 'react';
import "./Pokemon.css";
class Pokemon extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() { 
        return (
            <div className="pokemon-wrap">
                <p className="pokemon-text">{this.props.pokemon.name}</p>
                <img className="pokemon-img" src={this.props.pokemon.sprites.front_default} alt={"capturado" + this.props.index} />
            </div>
         );
    }
}
 
export default Pokemon;
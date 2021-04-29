
import React, { Component } from 'react';

class Pokemon extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() { 
        return (
            <div>
                <p>{this.props.pokemon.name}</p>
                <img src={this.props.pokemon.sprites.front_default} alt={"capturado" + this.props.index} />
            </div>
         );
    }
}
 
export default Pokemon;
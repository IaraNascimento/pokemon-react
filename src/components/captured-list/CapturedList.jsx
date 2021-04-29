
import React, { Component } from "react";
import Pokemon from "../pokemon/Pokemon";

class CapturedList extends Component {

    // constructor(props){
    //     super(props);
    // }

    render() {
        return (
            <ul>
                {this.props.captured.map((pokemon, index) => {
                    return (
                        <li key={index}>
                            <Pokemon pokemon={pokemon} index={index} />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default CapturedList;

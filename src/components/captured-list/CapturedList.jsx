
import React, { Component } from "react";
import Pokemon from "../pokemon/Pokemon";
import "./CapturedList.css";

class CapturedList extends Component {

    // constructor(props){
    //     super(props);
    // }

    render() {
        return (
            <ul className="captured-list">
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

import React, { Component } from "react";

class PersonCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            position: "On"
        };
    }
    render(){
        const { firstName, lastName } = this.props;
        return (<div><h1>{ this.props.firstName }, { this.props.lastName }</h1>
        <p>Age: {this.props.age}</p>
        <p>Hair Color: {this.props.hairColor}</p>
        { this.props.children }
        <fieldset>
            <p>The light is currently { this.state.position }</p>
            <button onClick={ () => {  if( this.state.position === "On" ) {
                                        this.setState({ position: "Off" });
                                    } else {
                                        this.setState({ position: "On" });
                                    } } }>Flip Switch</button>
        </fieldset>

        </div>);
    }
}

export default PersonCard;
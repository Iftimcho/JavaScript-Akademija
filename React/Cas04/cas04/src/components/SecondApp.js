import React from 'react';

export class SecondApp extends React.Component{
    /* So konstruktor se definira state vo Klasna komponenta*/
    constructor(props){
        super();
        console.log('This is constructor');
        this.state = {
            promenliva1: "Prva Vrednost"
        }
    }
    smeniVrednost = () => {
        this.setState({promenliva1: "Nova Vrednost"});
    }
    componentDidMount(){
        console.log('This is componentDidMount');
    }
    render() {
        console.log('This is render metod');
        return(
            <div id="second-app">
                <h2>Class component</h2>
                <p>{ this.state.promenliva1 }</p>
                <button onClick={this.smeniVrednost}>Change value</button>
            </div>
        )
    }
}
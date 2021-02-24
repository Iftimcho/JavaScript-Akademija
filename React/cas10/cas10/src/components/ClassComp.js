import React from 'react';
// go importirame state od redux
import {connect} from 'react-redux';
import {sayHello} from './../actions/SayHelloActions'// action creator-ot
class ClassComp extends React.Component {

    componentDidMount() {
        this.props.getGreeting();
    }

    render() {
        return(
            <div id="class-comp">
                <h2> Class Component </h2>
                <h4>{ this.props.greeting }</h4>
            </div>
        )
    }
}


// so ovie 2 ja vrzuvame komponentata so samiot Redux
const mapStateToProps = (state) => {
    return {
        greeting: state.SayHelloReducer.greeting
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getGreeting:() => {
            // sekogas mora da iskoristime dispatch koga koristime redux
            dispatch(sayHello())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ClassComp); // connect e higher order funkcija
import React, {Component} from 'react';
import {connect} from 'react-redux';


import './App.scss';


class App extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    render() {
        return (
            <div className="App">
                app!
            </div>
        );
    }
}

function mapStateToProps({}) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
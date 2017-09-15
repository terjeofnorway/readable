import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';

import './App.scss';
import Titlebar from '../components/titlebar/titlebar';

import Start from './StartContainer/start';


class App extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    render() {
        return (
            <div className="App">
                <Titlebar />
                <Route path='/' exact render={ () => (
                    <Start />
                )} />
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
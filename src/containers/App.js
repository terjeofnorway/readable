import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';

import {withRouter} from 'react-router-dom';

import './App.scss';
import Titlebar from '../components/titleBar/titleBar';

import PostList from './postList/postList';
import PostDetails from './postDetails/postDetails';

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
                <Route path='/' exact render={ (props) => {
                    return (
                        <PostList />
                    )
                }} />

                <Route path='/posts/:id' exact render={ (props) => {
                    return (
                        <PostDetails id={props.match.params.id} />
                    )
                }} />

            </div>
        );
    }
}

function mapStateToProps({}) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App));
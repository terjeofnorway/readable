import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import Confirm from '../components/confirm/confirm';

import {withRouter} from 'react-router-dom';

import './App.scss';
import Titlebar from '../components/titleBar/titleBar';
import Drawer from '../containers/drawer/drawer';
import PostList from './postList/postList';
import PostDetails from './postDetails/postDetails';
import AddPost from '../components/addPost/addPostButton';
import NewPost from './newPost/newPost';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Titlebar />
                <Drawer />
                <Route path='/' exact render={ (props) => {
                    return (
                        <PostList />
                    )
                }} />

                <Route path='/posts/new' exact render={ (props) => {
                    return (
                        <NewPost />
                    )
                }} />

                <Route path='/categories/:categorySlug' exact render={ (props) => {

                    return (
                        <div>
                            <PostList categorySlug={props.match.params.categorySlug} />
                            <AddPost />
                        </div>
                    )
                }} />

                <Route path='/posts/:id' exact render={ (props) => {
                    return (
                        <PostDetails id={props.match.params.id} />
                    )
                }} />
                <Confirm></Confirm>
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
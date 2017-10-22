import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import Confirm from '../components/confirm/confirm';

import {withRouter} from 'react-router-dom';

import './App.scss';
import Titlebar from '../components/titleBar/titleBar';
import Drawer from '../containers/drawer/drawer';
import PostList from './postList/postList';
import PostDetails from './postDetails/postDetails';
import AddPost from '../components/addPost/addPostButton';
import CreatePost from './createPost/createPost';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Titlebar />
                <Drawer />
                <Switch>
                <Route path='/' exact render={ (props) => {
                    return (
                        <div>
                            <PostList />
                            <AddPost />
                        </div>
                    )
                }} />

                    <Route path='/posts' exact render={ (props) => {
                        return (
                            <div>
                                <PostList />
                                <AddPost />
                            </div>
                        )
                    }} />

                <Route path='/posts/new' exact render={ (props) => {
                    return (
                        <CreatePost />
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
                    const id = props.match.params.id;
                    return (
                        id === 'new' ? <div /> : <PostDetails id={id} />
                    )
                }} />
                </Switch>
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
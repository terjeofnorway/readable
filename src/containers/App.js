import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import PT from 'prop-types';
import Confirm from 'components/confirm/confirm';
import Titlebar from 'components/titleBar/titleBar';
import Drawer from 'containers/drawer/drawer';
import PostList from 'containers/postList/postList';
import PostDetails from 'containers/postDetails/postDetails';
import AddPost from 'components/addPost/addPostButton';
import CreatePost from 'containers/createPost/createPost';

import './App.scss';

const App = () => (
  <div className="App">
    <Titlebar />
    <Drawer />
    <Switch>
      { /* The base route will display all unfiltered posts */ }
      <Route
        path="/" exact render={() => (
          <div>
            <PostList />
            <AddPost />
          </div>
        )}
      />

      { /* Make sure the /post works by redirecting */ }
      <Route
        path="/posts" exact render={() => (
          <Redirect to="/" />
        )}
      />

      { /* Set explicit route for creating new post. Wrapping in Switch
       will ensure that routes below will not conflict. */ }
      <Route
        path="/posts/new" exact render={() => (
          <CreatePost />
      )}
      />

      { /* Display posts from all categories */ }
      <Route
        path="/:categorySlug" exact render={props => (
          <div>
            <PostList categorySlug={props.match.params.categorySlug} />
            <AddPost />
          </div>
        )}
      />

      <Route
        path="/posts/:id" exact render={props => {
        const { id } = props.match.params;
        return (
          id === 'new' ? <div /> : <PostDetails id={id} />
        );
      }}
      />
    </Switch>
    <Confirm />
  </div>
);

App.propTypes = {
  match: PT.object,
};

App.defaultProps = {
  match: {},
};

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App));

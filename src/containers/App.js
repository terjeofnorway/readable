import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
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
      <Route
        path="/" exact render={() => (
          <div>
            <PostList />
            <AddPost />
          </div>
        )}
      />

      <Route
        path="/posts" exact render={() => (
          <div>
            <PostList />
            <AddPost />
          </div>
        )}
      />

      <Route
        path="/posts/new" exact render={() => (
          <CreatePost />
      )}
      />

      <Route
        path="/categories/:categorySlug" exact render={props => (
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

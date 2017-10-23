import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PT from 'prop-types';
import PostForm from 'components/postForm/postForm';
import { savePost } from 'actions/postActions';
import { createPostTemplate } from 'constants/constants';

import './createPost.scss';

class CreatePost extends Component {
  static propTypes = {
    history: PT.object,
    match: PT.object,
    savePost: PT.func.isRequired,
  }

  static defaultProps = {
    history: {},
    match: {},
  }

  savePost = post => {
    this.props.savePost(post);
    if (this.props.match.params.id !== post.id) {
      console.log(`/posts/${post.id}`);
      this.props.history.push(`/posts/${post.id}`);
    }
  };

  render() {
    const post = { ...createPostTemplate() };
    return (
      <div className="CreatePost">
        <PostForm post={post} savePost={this.savePost} />
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  savePost: post => dispatch(savePost(post)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreatePost));

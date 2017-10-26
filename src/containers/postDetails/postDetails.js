import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Column, Row } from 'react-foundation';
import PT from 'prop-types';

import Vote from 'components/vote/vote';
import EditDelete from 'components/editDelete/editDelete';
import Comments from 'components/comments/comments';
import moment from 'moment';

import { addPostVoteScore, savePost, deletePost, startEditPost } from 'actions/postActions';
import { loadComments } from 'actions/commentActions';
import PostForm from 'components/postForm/postForm';
import { HUMAN_DATE_FORMAT } from 'constants/constants';

import './postDetails.scss';

const PostBody = props => {
  const {
    id,
    title,
    author,
    timestamp,
    voteScore,
    body,
    category,
  } = props.post;

  const { addVote } = props;

  return Object.keys(props.post).length === 0 ? null : (
    <div className="PostDetails">
      <div className="PostDetails_Header">
        <Row>
          <Column small={12} large={12}><span className="Header__Category">{category}</span></Column>
        </Row>
        <Row>
          <Column small={12} large={12}>
            <h1 className="Header__Title">{title}</h1>
          </Column>
        </Row>
        <Row>
          <Column small={12} large={6}>
            <span className="Header__Author">{author}</span>
          </Column>
          <Column small={12} large={6}>
            <span className="Header__Date">{moment(timestamp).format(HUMAN_DATE_FORMAT)}</span>
          </Column>
        </Row>
        <Row>
          <Column small={12} large={12}>
            <Vote id={id} voteScore={voteScore} addVote={addVote} />
          </Column>
        </Row>
      </div>
      <div className="PostDetails__Content">
        <Row>
          <Column small={12} large={12}>
            <div className="PostDetails__Body">
              {body}
            </div>
          </Column>
        </Row>
        <Row>
          <Column small={12} large={12}>
            <EditDelete id={id} toggleEdit={() => props.startEditPost(id)} delete={() => props.deletePost(id)} />
          </Column>
        </Row>
      </div>
      <Comments parentId={id} />
    </div>
  );
};

PostBody.propTypes = {
  post: PT.object,
  addVote: PT.func.isRequired,
  startEditPost: PT.func.isRequired,
  deletePost: PT.func.isRequired,
};

PostBody.defaultProps = {
  post: {},
};

class PostDetails extends Component {
  static propTypes = {
    savePost: PT.func.isRequired,
    history: PT.shape({ push: PT.func.isRequired }).isRequired,
    match: PT.shape({ params: PT.shape({ id: PT.string.isRequired }) }).isRequired,
    id: PT.string.isRequired,
    post: PT.object,
    loadComments: PT.func.isRequired,
  }

  static defaultProps = {
    post: {},
  }

  componentDidMount() {
    this.props.id && this.props.loadComments(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.post === {} || nextProps.post.deleted) {
      nextProps.history.push('/');
    }
  }

  savePost = post => {
    this.props.savePost(post);
    if (this.props.match.params.id !== post.id) {
      this.props.history.push(`/posts/${post.id}`);
    }
  };

  render() {
    const post = this.props.post ? this.props.post : { ...this.postTemplate, isEditing: true };

    return (!post.isEditing ? (PostBody(this.props)) : (<PostForm post={post} savePost={this.savePost} />));
  }
}

const mapStateToProps = ({ posts, ui }, { id }) => ({
  post: posts[id],
  isEditingPost: ui.postEditor.isEditingPost,
  editorContent: ui.postEditor.editorContent,
});

const mapDispatchToProps = dispatch => ({
  addVote: (voteScore, postId) => dispatch(addPostVoteScore(voteScore, postId)),
  loadComments: postId => dispatch(loadComments(postId)),
  deletePost: postId => dispatch(deletePost(postId)),
  startEditPost: postId => dispatch(startEditPost(postId)),
  savePost: post => dispatch(savePost(post)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostDetails));

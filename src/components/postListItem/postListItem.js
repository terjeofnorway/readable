import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PT from 'prop-types';
import moment from 'moment';
import { Row, Column } from 'react-foundation';

import Vote from 'components/vote/vote';
import EditDelete from 'components/editDelete/editDelete';
import { addPostVoteScore, deletePost, startEditPost } from 'actions/postActions';

import { HUMAN_DATE_FORMAT } from 'constants/constants';
import './postListItem.scss';


class PostListItem extends Component {
  static propTypes = {
    post: PT.object.isRequired,
    addVote: PT.func.isRequired,
    startEditPost: PT.func.isRequired,
    deletePost: PT.func.isRequired,
    history: PT.object,
  };

  static defaultProps = {
    history: {},
  };

  gotoPostAndEdit = () => {
    this.props.history.push(`/posts/${this.props.post.id}`);
    this.props.startEditPost(this.props.post.id);
  };

  render() {
    const {
      id,
      timestamp,
      title,
      author,
      category,
      voteScore,
      commentCount,
    } = this.props.post;

    return (
      <Column small={12} large={6}>
        <div className="PostListItem">
          <Row>
            <Column small={8} large={8}>
              <Link to={`/posts/${id}`}>
                <div className="PostListItem__Category">{category}</div>
                <div className="PostListItem__Date">{moment(timestamp).format(HUMAN_DATE_FORMAT)}</div>
                <div className="PostListItem__Title">{title}</div>
                <div className="PostListItem__Author">{author}</div>
                <div className="PostListItem__CommentCount">{commentCount} comments</div>
              </Link>
            </Column>
            <Column small={4} large={4}>
              <Vote voteScore={voteScore} id={id} addVote={this.props.addVote} />
            </Column>
          </Row>
          <Row>
            <Column small={12}>
              <EditDelete id={id} toggleEdit={() => this.gotoPostAndEdit(id)} delete={() => this.props.deletePost(id)} />
            </Column>
          </Row>
        </div>
      </Column>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  addVote: (voteScore, postId) => dispatch(addPostVoteScore(voteScore, postId)),
  startEditPost: postId => dispatch(startEditPost(postId)),
  deletePost: postId => dispatch(deletePost(postId)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostListItem));

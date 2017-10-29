import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PT from 'prop-types';
import moment from 'moment';
import { Row, Column } from 'react-foundation';

import Vote from 'components/vote/vote';
import { addPostVoteScore } from 'actions/postActions';

import { HUMAN_DATE_FORMAT } from 'constants/constants';
import './postListItem.scss';


const PostListItem = props => {
  const {
    id,
    timestamp,
    title,
    author,
    category,
    voteScore,
  } = props.post;

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
            </Link>
          </Column>
          <Column small={4} large={4}>
            <Vote voteScore={voteScore} id={id} addVote={props.addVote} />
          </Column>
        </Row>
      </div>
    </Column>
  );
};

PostListItem.propTypes = {
  post: PT.shape({
    author: PT.string.isRequired,
    timestamp: PT.number.isRequired,
    title: PT.string.isRequired,
    body: PT.string.isRequired,
  }).isRequired,
  addVote: PT.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  addVote: (voteScore, postId) => dispatch(addPostVoteScore(voteScore, postId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostListItem);

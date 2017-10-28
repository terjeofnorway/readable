import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';
import CommentList from 'components/commentList/commentList';
import CommentForm from 'components/commentForm/commentForm';

import './comments.scss';

const Comments = props => (
  <div className="Comments">
    <h1>Comments</h1>
    <CommentList comments={props.comments} />
    <CommentForm parentId={props.parentId} />
  </div>
);

Comments.propTypes = {
  comments: PT.arrayOf(PT.object),
  parentId: PT.string.isRequired,
};

Comments.defaultProps = {
  comments: [],
};

const mapStateToProps = ({ ui, comments }) => {
  const orderByCommentsKey = ui.comment_order.post_object_key;
  const commentsArray = Object.keys(comments).map(key => comments[key]).filter(item => !item.deleted);
  const sortedComments = commentsArray.sort((a, b) => a[orderByCommentsKey] < b[orderByCommentsKey]);

  return {
    comments: sortedComments,
  };
};

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Comments);

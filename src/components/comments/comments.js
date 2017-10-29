import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';
import { Column } from 'react-foundation';

import CommentList from 'components/commentList/commentList';
import CommentForm from 'components/commentForm/commentForm';

import './comments.scss';

const Comments = props => (
  <div className="Comments">
    <h1>{props.comments.length} comments from readers</h1>
    <CommentList comments={props.comments} />
    <h1>Add your own comment</h1>
    <Column small={12} large={8} offsetOnLarge={2}>
      <CommentForm parentId={props.parentId} />
    </Column>
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
  const orderByCommentsKey = ui.comment_order.field_key;
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

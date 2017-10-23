import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import PT from 'prop-types';

import { saveComment, deleteComment, startEditComment, addCommentVoteScore } from 'actions/commentActions';
import EditDelete from 'components/editDelete/editDelete';
import CommentForm from 'components/commentForm/commentForm';
import Vote from 'components/vote/vote';
import { HUMAN_DATE_FORMAT } from 'constants/constants';
import './commentListItem.scss';


const CommentListItem = props => {
  const {
    id,
    author,
    timestamp,
    body,
    isEditing,
    voteScore,
  } = props.comment;

  const { addVote } = props;

  const content = isEditing ?
    <CommentForm comment={props.comment} />
    :
    (
      <div className="CommentListItem">
        <h2 className="Comment__Date">{moment(timestamp).format(HUMAN_DATE_FORMAT)}</h2>
        <p className="Comment__Author">{author}</p>
        <p className="Comment__Body">{body}</p>
        <Vote id={id} voteScore={voteScore} addVote={addVote} />
        <EditDelete id={id} toggleEdit={props.startEditComment} delete={props.delete} />
      </div>
    );

  return (
    <div>{content}</div>
  );
};

CommentListItem.propTypes = {
  comment: PT.object,
  startEditComment: PT.func,
  delete: PT.func,
  addVote: PT.func,
};

CommentListItem.defaultProps = {
  comment: {},
  startEditComment: () => {},
  delete: () => {},
  addVote: () => {},
};

const mapStateToProps = ({ ui }) => ({
  activeCommentAction: ui.commentEditor.activeCommentAction,
  commentBeingEdited: ui.commentEditor.commentBeingEdited,
});

const mapDispatchToProps = dispatch => ({
  addVote: (voteScore, postId) => dispatch(addCommentVoteScore(voteScore, postId)),
  saveComment: comment => dispatch(saveComment(comment)),
  startEditComment: id => dispatch(startEditComment(id)),
  delete: id => dispatch(deleteComment(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentListItem);

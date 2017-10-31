import API from 'helpers/api';
import * as Types from 'actions/types';

export function injectComments(comments) {
  return {
    type: Types.INFLATE_COMMENTS,
    comments,
  };
}

export function loadComments(postId) {
  return dispatch => API.loadCommentsFromServer(postId).then(data => dispatch(injectComments((data))));
}

export function startEditComment(commentId) {
  return {
    type: Types.START_EDIT_COMMENT,
    commentId,
  };
}

export function saveComment(comment) {
  return dispatch => {
    API.requestSaveComment(comment).then(returnComment => {
      dispatch({
        type: Types.SAVE_COMMENT,
        comment: returnComment,
      });
    });
  };
}


export function deleteComment(commentId) {
  return dispatch => {
    API.requestDeleteComment(commentId).then(comment => {
      dispatch({
        type: Types.DELETE_COMMENT,
        comment,
      });
    });
  };
}

export function addCommentVoteScore(voteScore, commentId) {
  return dispatch => {
    const voteDirection = voteScore === -1 ? 'downVote' : 'upVote';
    API.requestVoteForComment(voteDirection, commentId).then(comment => {
      dispatch({
        type: Types.ADD_VOTE_SCORE_TO_COMMENT,
        comment,
      });
    });
  };
}

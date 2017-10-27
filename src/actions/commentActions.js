import API from 'helpers/api';

export function injectComments(comments) {
  return {
    type: 'INFLATE_COMMENTS',
    comments,
  };
}

export function loadComments(postId) {
  return dispatch => API.loadCommentsFromServer(postId).then(data => dispatch(injectComments((data))));
}

export function startEditComment(commentId) {
  return {
    type: 'START_EDIT_COMMENT',
    commentId,
  };
}

export function saveComment(comment) {
  return dispatch => {
    API.requestSaveComment(comment).then(value => console.log(value));

    dispatch({
      type: 'SAVE_COMMENT',
      comment,
    });
  };
}


export function deleteComment(commentId) {
  return dispatch => {
    API.requestDeleteComment(commentId).then(value => console.log(value));

    dispatch({
      type: 'DELETE_COMMENT',
      commentId,
    });
  };
}


export function addCommentVoteScore(voteScore, commentId) {
  return {
    type: 'ADD_VOTE_SCORE_TO_COMMENT',
    voteScore,
    commentId,
  };
}

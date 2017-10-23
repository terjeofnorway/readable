import API from 'helpers/api';

const uuid = require('uuid/v4');


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
  const cleanComment = comment.id ? { ...comment }
    :
    {
      ...comment, id: uuid(), isEditing: false, voteScore: 0,
    };

  return {
    type: 'SAVE_COMMENT',
    comment: cleanComment,
  };
}


export function deleteComment(commentId) {
  return {
    type: 'DELETE_COMMENT',
    commentId,
  };
}


export function addCommentVoteScore(voteScore, commentId) {
  return {
    type: 'ADD_VOTE_SCORE_TO_COMMENT',
    voteScore,
    commentId,
  };
}

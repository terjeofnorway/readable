import { showConfirm } from 'actions/uiActions';
import API from 'helpers/api';

export function addPostVoteScore(voteScore, id) {
  return dispatch => {
    const voteDirection = voteScore === -1 ? 'downVote' : 'upVote';
    API.requestVoteForPost(voteDirection, id).then(post => dispatch({
      type: 'ADD_VOTE_SCORE_TO_POST',
      post,
    }));
  };
}

export function deletePost(postId, confirmed) {
  return dispatch => {
    let resolveCallback = null;
    let rejectCallback = null;

    // eslint-disable-next-line
    const confirmPromise = new Promise((resolve, reject) => {
      resolveCallback = resolve;
      rejectCallback = reject;
    }).then(() => {
      // Redispatch theis action, but with confirmed as true
      dispatch(deletePost(postId, true));
    }).catch(() => {});

    if (confirmed) {
      API.requestDeletePost(postId).then(post =>
        dispatch({
          type: 'DELETE_POST',
          post,
        })).catch(error => console.log(error));
    }

    return !confirmed ?
      (dispatch(showConfirm(
        'Are you sure?',
        'Will delete the post altogether!',
        resolveCallback,
        rejectCallback,
      )))
      :
      null;
  };
}

export function startEditPost(id) {
  return {
    type: 'START_EDIT_POST',
    id,
  };
}


export function savePost(post) {
  // This action handles both adding new and updating existing posts, as the API
  // will handle adding any no-existing posts into DB via the POST method.
  return dispatch => {
    API.requestSavePost(post).then(returnPost => dispatch({
      type: 'SAVE_POST',
      post: returnPost,
    }));
  };
}

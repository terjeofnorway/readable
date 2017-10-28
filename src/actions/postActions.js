import { showConfirm } from 'actions/uiActions';
import API from 'helpers/api';

/** Adds a new vote to the total post score. Votes can be 1 or -1
 *
 * @param voteScore Number The Score to add (can be 1 or -1)
 * @param postId String The unique ID of the post.
 * @returns {{type: string, voteScore: *, postId: *}}
 */
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
  return dispatch => {
    API.requestAddPost(post).then(returnPost => dispatch({
      type: 'ADD_NEW_POST',
      post: returnPost,
    }));
  };
}

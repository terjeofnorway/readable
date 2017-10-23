/** Reducer handling the posts for the application
 *
 * @param state
 * @param action
 * @returns {{}}
 */
function postReducer(state = {}, action) {
  switch (action.type) {
    case 'INFLATE_POSTS': {
      return action.posts.reduce((collection, item) => {
        const newItem = { ...item, isEditing: false };
        const newCollection = { ...collection, [item.id]: newItem };
        return newCollection;
      }, {});
    }

    case 'ADD_VOTE_SCORE_TO_POST': {
      const { postId, voteScore } = action;
      const newVoteScore = state[postId].voteScore + voteScore;
      const post = { ...state[postId], voteScore: newVoteScore };


      return { ...state, [postId]: { ...post } };
    }

    case 'DELETE_POST': {
      const newState = { ...state, [action.postId]: { ...state[action.postId], deleted: true } };
      return newState;
    }

    case 'START_EDIT_POST':
      return { ...state, [action.id]: { ...state[action.id], isEditing: true } };

    case 'SAVE_POST':
      return { ...state, [action.post.id]: { ...action.post } };

    case 'ADD_NEW_POST':
      return { ...state, [action.post.id]: action.post };

    default:
      return state;
  }
}

export default postReducer;

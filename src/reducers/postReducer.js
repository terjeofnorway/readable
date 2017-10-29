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
        return { ...collection, [item.id]: newItem };
      }, {});
    }

    case 'ADD_VOTE_SCORE_TO_POST': {
      return { ...state, [action.post.id]: { ...action.post } };
    }

    case 'DELETE_POST': {
      return { ...state, [action.post.id]: { ...action.post } };
    }

    case 'START_EDIT_POST':
      return { ...state, [action.id]: { ...state[action.id], isEditing: true } };

    case 'SAVE_POST':
      return { ...state, [action.post.id]: { ...action.post } };

    default:
      return state;
  }
}

export default postReducer;

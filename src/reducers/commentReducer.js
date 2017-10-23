/** Reducer handling the comments for the application
 *
 * @param state
 * @param action
 * @returns {{}}
 */
function commentReducer(state = {}, action) {
  switch (action.type) {
    case 'INFLATE_COMMENTS': {
      return action.comments.reduce((collection, item) => {
        const comment = { ...item, isEditing: false };
        const newCollection = { ...collection };
        newCollection[comment.id] = comment;
        return newCollection;
      }, {});
    }
    case 'SAVE_COMMENT': {
      const { comment } = action;
      return { ...state, [comment.id]: { ...comment } };
    }

    case 'START_EDIT_COMMENT': {
      return { ...state, [action.commentId]: { ...state[action.commentId], isEditing: true } };
    }

    case 'STOP_EDIT_COMMENT': {
      return { ...state, [action.commentId]: { ...state[action.commentId], isEditing: false } };
    }

    case 'DELETE_COMMENT': {
      return { ...state, [action.commentId]: { ...state[action.commentId], deleted: true } };
    }

    case 'ADD_VOTE_SCORE_TO_COMMENT': {
      const newVoteScore = state[action.commentId].voteScore + action.voteScore;
      return { ...state, [action.commentId]: { ...state[action.commentId], voteScore: newVoteScore } };
    }

    default: {
      return state;
    }
  }
}

export default commentReducer;

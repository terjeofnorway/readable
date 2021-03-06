import * as Types from 'actions/types';

/** Reducer handling the comments for the application
 *
 * @param state
 * @param action
 * @returns {{}}
 */
function commentReducer(state = {}, action) {
  switch (action.type) {
    case Types.INFLATE_COMMENTS: {
      return action.comments.reduce((collection, item) => {
        const comment = { ...item, isEditing: false };
        const newCollection = { ...collection };
        newCollection[comment.id] = comment;
        return newCollection;
      }, {});
    }
    case Types.SAVE_COMMENT: {
      const { comment } = action;
      return { ...state, [comment.id]: { ...comment } };
    }

    case Types.START_EDIT_COMMENT: {
      return { ...state, [action.commentId]: { ...state[action.commentId], isEditing: true } };
    }

    case Types.DELETE_COMMENT: {
      return { ...state, [action.comment.id]: { ...action.comment } };
    }

    case Types.ADD_VOTE_SCORE_TO_COMMENT: {
      return { ...state, [action.comment.id]: { ...action.comment } };
    }

    default: {
      return state;
    }
  }
}

export default commentReducer;

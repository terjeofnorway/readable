/** Reducer handling the comments for the application
 *
 * @param state
 * @param action
 * @returns {{}}
 */
function commentReducer(state = {}, action) {
    switch (action.type) {
        case 'INFLATE_COMMENTS':
            //Add the comments into the comment state.

            //TODO: Add load timestamp for checking for stale data.

            return action.comments.reduce((collection, item) => {
                const comment = {...item, isEditing:false};
                collection[comment.id] = comment;
                return collection;
            }, {});

        case 'SAVE_COMMENT':
            const {comment} = action;

            return {...state,[comment.id]:{...comment}};

        case 'START_EDIT_COMMENT':
            return {...state,[action.commentId]:{...state[action.commentId], isEditing:true}};

        case 'START_EDIT_COMMENT':
            return {...state,[action.commentId]:{...state[action.commentId], isEditing:false}};

        case 'DELETE_COMMENT':
            return {...state,[action.commentId]:{...state[action.commentId], deleted:true}}
        default:
            return state;
    }
}

export {commentReducer as comments};
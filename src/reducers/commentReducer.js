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
                collection[item.id] = item;
                return collection;
            }, {});

        case 'SAVE_COMMENT':
            const {comment} = action;

            return {...state,[comment.id]:{...comment}};

        default:
            return state;
    }
}

export {commentReducer as comments};
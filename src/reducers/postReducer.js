const uuid = require('uuid/v4');

/** Reducer handling the posts for the application
 *
 * @param state
 * @param action
 * @returns {{}}
 */
function postReducer(state = {}, action) {
    switch (action.type) {
        case 'INFLATE_POSTS':
            //Reduce the posts into an object where post.id is used as object key
            return action.posts.reduce((collection, item) => {
                item.isEditing = false;
                collection[item.id] = item;
                return collection;
            }, {});

        case 'ADD_VOTE_SCORE_TO_POST':
            const {postId, voteScore} = action;
            const post = state[postId];

            post.voteScore = post.voteScore + voteScore;

            return {...state, [postId]: {...post}}
        case 'DELETE_POST':
            const newState = Object.keys(state).reduce((collection, key) => {

                if (key !== action.postId) {
                    collection[key] = {...state[key]}
                };

                return collection;
            }, {});

            return newState;

        case 'START_EDIT_POST':
            return {...state,[action.id]:{...state[action.id], isEditing:true}};

        case 'SAVE_POST':
            return {...state, [action.post.id]:{...action.post}}

        case 'ADD_NEW_POST':
            return {...state,[action.post.id]:action.post}

        default:
            return state
    }
}

export {postReducer as posts};
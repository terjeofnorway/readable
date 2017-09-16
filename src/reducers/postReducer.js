/** Reducer handling the posts for the application
 *
 * @param state
 * @param action
 * @returns {{}}
 */
function postReducer(state = {}, action){
    switch(action.type){
        case 'INFLATE_POSTS':
            //Reduce the posts into an object where post.id is used as object key
            return action.posts.reduce((collection,item) => {
                collection[item.id] = item;
                return collection;
            },{});

            break;
        case 'ADD_VOTE_SCORE_TO_POST':
            const post = state[action.postId];
            const currentVoteScore = post.voteScore;
            post.voteScore = currentVoteScore + action.voteScore;


            return {...state,[1]:{...post}}
        default:
            return state
    }
}

export {postReducer as posts};
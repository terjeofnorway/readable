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

        case 'ADD_VOTE_SCORE_TO_POST':
            const {postId, voteScore} = action;
            const post = state[postId];

            post.voteScore = post.voteScore + voteScore;

            return {...state,[postId]:{...post}}
        case 'DELETE_POST':
            const newState = Object.keys(state).reduce((collection, key) => {


                if (key !== action.postId) { collection[key] = {...state[key]}};
                return collection;
            },{});


            console.log(newState);


            return newState;

        default:
            return state
    }
}

export {postReducer as posts};
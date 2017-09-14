/** Reducer handling the posts for the application
 *
 * @param state
 * @param action
 * @returns {{}}
 */
function postReducer(state = {}, action){
    const {posts} = action;
    switch(action.type){
        case 'INFLATE_POSTS':
            return {...state,...posts};
            break;
        default:
            return state
    }
}

export {postReducer as posts};
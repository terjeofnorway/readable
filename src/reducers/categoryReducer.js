/** Reducer handling the categories of the application
 *
 * @param state
 * @param action
 * @returns {{}}
 */
function categoryReducer(state = {}, action){
    const {categories} = action;

    switch(action.type){
        case 'INFLATE_CATEGORIES':
            return {...state,...categories};
        default:
            return state;

    }
}

export {categoryReducer as categories};
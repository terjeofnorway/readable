import {UI_FILTER} from "../constants/constants";

/**
 * The UI reducer makes it possible to store the entire application state and
 * late re-hydrate it into a new application launch for percistance.
 */

const defaultState = {
    post_order:UI_FILTER[0],
}

function uiReducer(state=defaultState, action){
    switch (action.type) {
        case 'TOGGLE_SORT_ORDER':
            const currentOrderPos = UI_FILTER.findIndex(item => (item === state['post_order']));
            const newOrderPos = currentOrderPos + 1 < UI_FILTER.length ? currentOrderPos + 1 : 0;

            return {...state, ['post_order']: UI_FILTER[newOrderPos]};

            break;

        default:
            return state;
    }
}


export {uiReducer as ui};
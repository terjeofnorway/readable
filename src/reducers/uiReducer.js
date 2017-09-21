import {UI_FILTER} from "../constants/constants";

/**
 * The UI reducer makes it possible to store the entire application state and
 * late re-hydrate it into a new application launch for percistance.
 */

const defaultState = {
    post_order: UI_FILTER[0],
    confirm: {
        visible: false,
        title: '',
        body: '',
        confirmPayload:'',

    }
}

function uiReducer(state = defaultState, action) {
    switch (action.type) {
        case 'TOGGLE_SORT_ORDER':
            const currentOrderPos = UI_FILTER.findIndex(item => (item === state.post_order));
            const newOrderPos = currentOrderPos + 1 < UI_FILTER.length ? currentOrderPos + 1 : 0;

            return {...state, 'post_order': UI_FILTER[newOrderPos]};

        case 'SHOW_CONFIRM':
            const {title, body, resolveCallback, rejectCallback} = action;

            return {...state,'confirm':{visible:true,title,body, resolveCallback, rejectCallback}}

        case 'HIDE_CONFIRM':
            return {...state, 'confirm':{visible:false,title:null, body:null}}

        default:
            return state;
    }
}


export {uiReducer as ui};
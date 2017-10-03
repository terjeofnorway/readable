import {UI_FILTER} from "../constants/constants";

/**
 * The UI reducer makes it possible to store the entire application state and
 * late re-hydrate it into a new application launch for percistance.
 */

const defaultState = {
    post_order: UI_FILTER[0],
    comment_order: UI_FILTER[0],
    confirm: {
        visible: false,
        title: '',
        body: '',
        confirmPayload:'',
    },
    drawer:{
        visible:false
    },
    postEditor:{
        isEditingPost:false,
        editorContent:{},
    },
    commentEditor: {
        isEditingComment:false,
        editorContent:{},
    }
}

function uiReducer(state = defaultState, action) {
    switch (action.type) {
        case 'TOGGLE_SORT_ORDER':
            const sortTarget = `${action.sortTarget}_order` || 'post_order';
            const currentOrderPos = UI_FILTER.findIndex(item => (item === state[sortTarget]));
            const newOrderPos = currentOrderPos + 1 < UI_FILTER.length ? currentOrderPos + 1 : 0;

            return {...state, [sortTarget]: UI_FILTER[newOrderPos]};

        case 'SHOW_CONFIRM':
            const {title, body, resolveCallback, rejectCallback} = action;

            return {...state,'confirm':{visible:true,title,body, resolveCallback, rejectCallback}};

        case 'HIDE_CONFIRM':
            return {...state, 'confirm':{visible:false,title:null, body:null}};

        case 'CLOSE_DRAWER':
            return {...state, 'drawer':{visible:false}};

        case 'SHOW_DRAWER':
            return {...state, 'drawer':{visible:true}};

        case 'TOGGLE_EDIT_POST':
            const newFlag = !state.postEditor.isEditingPost;
            const newPostEditor = {...state['postEditor'], 'isEditingPost':newFlag, 'editorContent':{}};

            return {...state, 'postEditor':newPostEditor};

        case 'UPDATE_POST_EDITOR_CONTENT':
            const newPostEditorContent = {...state.postEditor.editorContent,[action.field]:action.content};
            return {...state, 'postEditor':{...state['postEditor'],'editorContent':newPostEditorContent}}

        default:
            return state;
    }
}


export {uiReducer as ui};
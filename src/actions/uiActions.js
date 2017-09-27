
import {updatePost} from "./postActions";

/** Toggles the sort order for listing posts. This gglobal for the entire
 * application.
 * @returns {{type: string}}
 */
export function toggleSortOrder() {
    return {
        type: 'TOGGLE_SORT_ORDER',
    }
}


export function showConfirm(title, body, resolveCallback, rejectCallback) {
    return {
        type: 'SHOW_CONFIRM',
        title,
        body,
        resolveCallback,
        rejectCallback,
    }
}


export function confirmOK() {
    return {
        type: 'HIDE_CONFIRM',
    }
}

export function confirmCancel() {
    return {
        type: 'HIDE_CONFIRM',
    }
}


export function closeDrawer() {
    return {
        type: 'CLOSE_DRAWER',
    }
}

export function showDrawer() {
    return {
        type: 'SHOW_DRAWER',
    }
}

export function toggleEditPost(postId) {
    return (dispatch, getState) => {

        if(Object.keys(getState().ui.postEditor.editorContent).length > 0){
            const postPartial = {postId, ...getState().ui.postEditor.editorContent};
            dispatch(updatePost(postPartial));
        }

        dispatch({
            type: 'TOGGLE_EDIT_POST',
            postId,

        });
    }
}

export function updateEditorContent(content, field) {
    return {
        type: 'UPDATE_EDITOR_CONTENT',
        content,
        field,
    }
}
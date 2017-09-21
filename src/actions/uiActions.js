/** Toggles the sort order for listing posts. This gglobal for the entire
 * application.
 * @returns {{type: string}}
 */
export function toggleSortOrder(){
    return {
        type:'TOGGLE_SORT_ORDER',
    }
}


export function showConfirm(title, body, resolveCallback, rejectCallback){
    return {
        type: 'SHOW_CONFIRM',
        title,
        body,
        resolveCallback,
        rejectCallback,
    }
}


export function confirmOK(){
    return {
        type:'CONFIRM_OK'
    }
}

export function confirmCancel(){
    return {
        type:'HIDE_CONFIRM'
    }
}
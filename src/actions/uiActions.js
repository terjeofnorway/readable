/** Toggles the sort order for listing posts. This gglobal for the entire
 * application.
 * @returns {{type: string}}
 */
export function toggleSortOrder(){
    return {
        type:'TOGGLE_SORT_ORDER',
    }
}
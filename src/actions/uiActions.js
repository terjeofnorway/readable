/** Toggles the sort order for listing posts. This gglobal for the entire
 * application.
 * @returns {{type: string}}
 */
export function toggleSortOrder(sortTarget) {
  return {
    type: 'TOGGLE_SORT_ORDER',
    sortTarget,
  };
}

export function showConfirm(title, body, resolveCallback, rejectCallback) {
  return {
    type: 'SHOW_CONFIRM',
    title,
    body,
    resolveCallback,
    rejectCallback,
  };
}

export function confirmOK() {
  return {
    type: 'HIDE_CONFIRM',
  };
}

export function confirmCancel() {
  return {
    type: 'HIDE_CONFIRM',
  };
}

export function closeDrawer() {
  return {
    type: 'CLOSE_DRAWER',
  };
}

export function showDrawer() {
  return {
    type: 'SHOW_DRAWER',
  };
}

export function toggleCommentDatePicker(focused) {
  return {
    type: 'TOGGLE_COMMENT_DATE_PICKER',
    focused,
  };
}

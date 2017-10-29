import { LIST_ORDER_OPTIONS } from '../constants/constants';

/** Toggles the sort order for listing posts. This gglobal for the entire
 * application.
 * @returns {{type: string}}
 */
export function cycleListOrder(sortTarget) {
  return {
    type: 'CYCLE_LIST_ORDER',
    sortTarget,
    listOrderOptions: LIST_ORDER_OPTIONS, // Supply with the action object reducer to keep reducer pure.
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

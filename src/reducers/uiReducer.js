/**
 * The UI reducer makes it possible to store the entire application state and
 * late re-hydrate it into a new application launch for percistance.
 */

const defaultState = {
  post_order: { id: 'BY_SCORE', label: 'By votes', field_key: 'voteScore' },
  comment_order: { id: 'BY_SCORE', label: 'By votes', field_key: 'voteScore' },
  confirm: {
    visible: false,
    title: '',
    body: '',
    confirmPayload: '',
  },
  drawer: {
    visible: false,
  },
  postEditor: {
    isEditingPost: false,
    editorContent: {},
  },
  commentEditor: {
    datePickerFocused: false,
    editorContent: {},
    activeCommentAction: '',
  },
};

function uiReducer(state = defaultState, action) {
  switch (action.type) {
    /* Cycle the ordering of posts and comments between TITLE, TIMESTAMP AND VOTESCORE */
    case 'CYCLE_LIST_ORDER': {
      const { sortTarget, listOrderOptions } = action;

      // Get the target list to sort, either comment or post. Default to 'post_order' if something failed.
      const sortTargetKey = `${sortTarget}_order` || 'post_order';

      // Get the current position of the order cycle.
      const currentOrderPos = listOrderOptions.findIndex(item => (item.id === state[sortTargetKey].id));

      // Set the new cycle position either by increment 1 or cycle back to 0;
      const newOrderPos = currentOrderPos + 1 < listOrderOptions.length ? currentOrderPos + 1 : 0;

      // Update state with new sort object.
      return { ...state, [sortTargetKey]: listOrderOptions[newOrderPos] };
    }

    case 'SHOW_CONFIRM': {
      const {
        title,
        body,
        resolveCallback,
        rejectCallback,
      } = action;

      return {
        ...state,
        confirm: {
          visible: true,
          title,
          body,
          resolveCallback,
          rejectCallback,
        },
      };
    }

    case 'HIDE_CONFIRM': {
      return { ...state, confirm: { visible: false, title: null, body: null } };
    }

    case 'CLOSE_DRAWER': {
      return { ...state, drawer: { visible: false } };
    }

    case 'SHOW_DRAWER': {
      return { ...state, drawer: { visible: true } };
    }

    default:
      return state;
  }
}

export default uiReducer;

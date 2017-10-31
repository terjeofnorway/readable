import * as Types from '../actions/types';

/** Reducer handling the categories of the application
 *
 * @param state
 * @param action
 * @returns {{}}
 */
function categoriesReducer(state = [], action) {
  const { categories } = action;

  switch (action.type) {
    case Types.INFLATE_CATEGORIES: {
      return [...state, ...categories];
    }
    default: {
      return state;
    }
  }
}

export default categoriesReducer;

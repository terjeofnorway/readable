import API from 'helpers/api';
import * as Types from 'actions/types';

/** ----------------------------------------
 * These exported action creators are used
 * for initial application loading.
 * -----------------------------------------
 */


/* Inflate categories into the app for the first time. */
export function inflateCategories(data) {
  return {
    type: Types.INFLATE_CATEGORIES,
    categories: data.categories,
  };
}

/* Inflate posts into the app for the first time */
export function inflatePosts(data) {
  return {
    type: Types.INFLATE_POSTS,
    posts: data,
  };
}

/* Load categories */
export function loadCategories() {
  return dispatch => API.loadCategoriesFromServer().then(data => dispatch(inflateCategories((data))));
}

/* Load Posts */
export function loadPosts() {
  return dispatch => API.loadPostsFromServer().then(data => dispatch(inflatePosts((data))));
}

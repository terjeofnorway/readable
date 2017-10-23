import { combineReducers } from 'redux';

import posts from './postReducer';
import categories from './categoryReducer';
import comments from './commentReducer';
import ui from './uiReducer';

export default combineReducers({
  posts,
  categories,
  comments,
  ui,
});

import {combineReducers} from 'redux';

import {posts} from './postReducer.js';
import {categories} from './categoryReducer.js';
import {ui} from './uiReducer.js';

export default combineReducers({posts,categories,ui});
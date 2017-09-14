import {combineReducers} from 'redux';

import {posts} from './postReducer.js';
import {categories} from './categoryReducer.js';

export default combineReducers({posts,categories});
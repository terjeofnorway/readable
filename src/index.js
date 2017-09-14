import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './containers/App';
import store from './stores/readerStore';

import registerServiceWorker from './registerServiceWorker';

import {loadCategories, loadPosts} from './actions/initActions';

store.dispatch(loadCategories());
store.dispatch(loadPosts());


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


registerServiceWorker();

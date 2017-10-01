import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, withRouter} from 'react-router-dom';

import {Provider} from 'react-redux';

import App from './containers/App';
import store from './stores/readerStore';

import registerServiceWorker from './registerServiceWorker';

import {loadCategories, loadPosts} from './actions/initActions';

store.dispatch(loadCategories());
store.dispatch(loadPosts());


withRouter(ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
document.getElementById('root')
))
;


registerServiceWorker();

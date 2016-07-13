import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';

import * as reducers from './reducers';
import { App } from './components';
import { FavoriteItemList, AvailableFilters } from './containers';
import { fetchFilters } from './actions'

import './index.scss';

const store = createStore(
    combineReducers(reducers),
    applyMiddleware(thunkMiddleware)
);

console.log(store.getState());
store.dispatch(fetchFilters());
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App >
            <AvailableFilters />
            <FavoriteItemList />
        </App>
    </Provider>,
    document.getElementById('root')
);

import React from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import async from 'middleware/async';
import stateValidator from 'middleware/stateValidator';
import reducers from './reducers';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children, initialState = {}}) => {

    const store = createStore(reducers, initialState, applyMiddleware(stateValidator,async));

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

// Components
import Root from './components/root.jsx';

// Styles
import './index.scss';

const defaultState = {};

const enhancers = compose(
    applyMiddleware(ReduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : store => store
);

const store = createStore(
    allReducers,
    defaultState,
    enhancers
);

const container = document.getElementById('main');

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
            <Root />
    </Provider>, container);
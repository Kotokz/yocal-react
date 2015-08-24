/**
 * Created by kotokz on 15/8/23.
 */

import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from './middleware/logger';
import thunk from 'redux-thunk';
import Router from './containers/router';
import * as reducers from './reducers';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import DiffMonitor from 'redux-devtools-diff-monitor';

let finalCreateStore;

if(__DEV_TOOLS__) {
    finalCreateStore = compose(
        applyMiddleware(logger, thunk),
        devTools(),
        persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
        createStore
    );
} else {
    finalCreateStore = applyMiddleware(logger, thunk)(createStore);
}

const reducer = combineReducers(reducers);
const store = finalCreateStore(reducer);

// Every time the state changes, log it
let unsubscribe = store.subscribe(() =>
        console.log(store.getState())
);

class App extends React.Component {
    render () {
        const { history } = this.props;
        return (
            <div>
                <Provider store={store}>
                    {() => <Router {...{ history }} />}
                </Provider>
                {__DEV_TOOLS__ ?
                    <DevTools store={store} monitor={DiffMonitor} /> : null
                }
            </div>
        );
    }
}

App.propTypes = {
    history: PropTypes.object.isRequired
};

export default App;
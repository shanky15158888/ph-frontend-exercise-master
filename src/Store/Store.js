import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../Reducers'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger';

const logger = createLogger();
export default createStore(rootReducer,
    compose(applyMiddleware(thunk, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
)
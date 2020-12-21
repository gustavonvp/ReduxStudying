import { IcartState } from './modules/cart/types';

import {composeWithDevTools} from 'redux-devtools-extension'
import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducers from './modules/rootReducers';
import rootSaga from './modules/rootSaga'

export interface IState{
    cart: IcartState
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]

const store = createStore(rootReducers,
    composeWithDevTools(
        applyMiddleware(...middlewares)
    )
)

sagaMiddleware.run(rootSaga)

export default store;

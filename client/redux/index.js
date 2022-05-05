import { createStore, applyMiddleware, compose } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import CreateSagaMiddleware from 'redux-saga'
 import thunk from 'redux-thunk'
import createRootReducer from './reducers'
import {sagaWatcher} from './sagas'

const saga = CreateSagaMiddleware()
const middleware = [thunk]
const initialState = {}

const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose
const composedEnchanters = composeFunc(applyMiddleware(...middleware, saga))
const store = createStore(createRootReducer(), initialState, composedEnchanters)

saga.run(sagaWatcher)



export default store
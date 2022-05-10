import {applyMiddleware, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
// import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';
import setupSocket from "./socket";
import handleNewMessage from './sagas/rootsaga'

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer:rootReducer,
    middleware : [],
    enhancers : [applyMiddleware(sagaMiddleware)]
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  })

  const socket = setupSocket(store.dispatch )
sagaMiddleware.run(handleNewMessage, { socket });
export default store;
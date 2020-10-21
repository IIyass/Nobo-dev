import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";
import { all } from 'redux-saga/effects';
import storeSagas from './store/saga'
import reducer from './reducers'

function* rootSaga() {
    yield all(storeSagas);
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer(), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

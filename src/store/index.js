import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { routerMiddleware } from 'connected-react-router';

import history from '../routes/history';
import reducers from './ducks';
// eslint-disable-next-line import/no-cycle
import sagas from './sagas';
import '../config/ReactotronConfig';

const middlewares = [routerMiddleware(history)];

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const composer = process.env.NODE_ENV === 'development'
  ? compose(
    applyMiddleware(...middlewares),
    console.tron.createEnhancer(),
  )
  : compose(applyMiddleware(...middlewares));

const store = createStore(reducers(history), composer);

sagaMiddleware.run(sagas);

export default store;

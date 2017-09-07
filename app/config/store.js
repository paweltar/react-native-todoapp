import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import reducers from '../reducers';

const middleware = [];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = createStore(
  reducers,
  undefined,
  compose(applyMiddleware(...middleware), autoRehydrate()),
);

persistStore(store, { storage: AsyncStorage });

export default store;

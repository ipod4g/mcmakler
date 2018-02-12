import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReduces from './reducers';

const middleware = [thunk];

const enhancer = compose(applyMiddleware(...middleware));
const store = createStore(rootReduces, enhancer);

export default store;

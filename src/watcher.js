import { createStore } from "redux";
import Reducer from './reducer';
import { add } from './actions';

const store = createStore(Reducer, window.devToolsExtension && window.devToolsExtension());
console.log(store.getState())

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)

store.dispatch(add('watcher start'))


import { rootReducer } from "./rootReducer";
import { legacy_createStore as createStore} from "redux";
// import {composeWithDevTools} from 'redux-Devtools-extension'


let store=createStore
(rootReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export {store}
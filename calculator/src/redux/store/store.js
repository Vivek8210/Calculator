import{ combineReducers, legacy_createStore as createStore} from 'redux'
import { todoReducer } from "../todo/reducer";

import { CounterReducer } from "../counter/reducer";

const rootReducer=combineReducers({
    count:CounterReducer,
    todo:todoReducer,
})
export const store=createStore(
    rootReducer ,
    
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
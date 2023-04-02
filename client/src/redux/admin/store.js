import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./AUthreducer/reducer";
import { reducer as productReducer } from "./ProductsReducer/reducer";


const rootReducer = combineReducers({authReducer,productReducer});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

import {createStore, combineReducers, applyMiddleware} from "redux";
import homeReducer from "./homeReducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import newsReducer from "./newsReducer";

let reducers = combineReducers({
    homePage: homeReducer,
    newsPage: newsReducer,
});

let store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;

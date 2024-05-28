import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { itemsReducer } from "./reducers/items";
import { filterReducer } from "./reducers/filter";
import { searchReducer } from "./reducers/search";

const rootReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  search: searchReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

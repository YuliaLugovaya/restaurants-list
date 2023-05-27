import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { mainReducer } from './reducers/mainReducer'
import { saveState } from "./localStorage";
import { loadState } from "./localStorage";

const reducer = combineReducers({
  mainStore: mainReducer,
});

const store = configureStore({
  reducer: reducer,
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
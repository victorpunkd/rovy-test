import { combineReducers } from "redux";
import dataFromFetch from "./dataFetchReducer";
import isDataLoaded from "./isDataLoadedReducer";
import currentData from "./currentDataReducer";

export default combineReducers({
  dataFromFetch,
  isDataLoaded,
  currentData,
});

import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { api } from "./middleware/api";
import rootReducer from "./reducers/rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, api],
});

export default store;

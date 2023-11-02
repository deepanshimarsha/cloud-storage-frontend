import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import folderReducer from "./reducers/folderReducer";

export default configureStore({
  reducer: {
    folders: folderReducer,
  },
  middleware: [thunk],
});

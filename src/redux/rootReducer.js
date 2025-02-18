import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import searchReducer from "./slices/searchSlice";
import modalReducer from "./slices/modalSlice";
import allTasksReducer from "./slices/alltasksSlice";
import taskManagementReducer from "./slices/tasksManagementSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
  modal: modalReducer,
  allTasks: allTasksReducer,
  taskManagement: taskManagementReducer,
});

export default rootReducer;

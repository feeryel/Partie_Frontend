import { combineReducers } from "redux";
import ContactReducer from "../reducers/ContactReducer";
import UserReducer from "../reducers/UserReducer";
import ReportReducer from "../reducers/ReportReducer";
export const rootReducer = combineReducers({
  ContactReducer,
  UserReducer,
  ReportReducer,
});

export type State = ReturnType<typeof rootReducer>;

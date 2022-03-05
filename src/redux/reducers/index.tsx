import { combineReducers } from "redux";
import generalReducer from "./generalReducer";

const rootReducer = combineReducers({
  generalState: generalReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
export default rootReducer;

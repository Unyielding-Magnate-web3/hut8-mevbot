import { AnyAction } from "redux";
import * as actionTypes from "../actionTypes/generalActionTypes";

type GeneralState = {
  spendingLimit: number;
};

const initialState: GeneralState = {
  spendingLimit: 0,
};

const generalReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.SET_SPENDING_LIMIT:
      return {
        ...state,
        spendingLimit: action.spendingLimit,
      };
    default:
      return {
        ...state,
      };
  }
};

export default generalReducer;

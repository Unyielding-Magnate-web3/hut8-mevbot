import { AnyAction } from "redux";
import * as actionTypes from "../actionTypes/generalActionTypes";

type GeneralState = {};
const initialState: GeneralState = {};

const generalReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

export default generalReducer;

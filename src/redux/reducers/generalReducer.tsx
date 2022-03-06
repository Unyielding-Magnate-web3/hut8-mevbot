import { AnyAction } from "redux";
import { MemberData } from "../../core/models/MemberData";
import * as actionTypes from "../actionTypes/generalActionTypes";

type GeneralState = {
  spendingLimit: number;
  member: MemberData;
};

const initialState: GeneralState = {
  spendingLimit: 0,
  member: new MemberData(),
};

const generalReducer = (
  state = initialState,
  action: AnyAction
): GeneralState => {
  switch (action.type) {
    case actionTypes.SET_SPENDING_LIMIT:
      return {
        ...state,
        spendingLimit: action.spendingLimit,
      };
    case actionTypes.SET_MEMBER_DATA:
      return {
        ...state,
        member: action.member,
      };
    default:
      return {
        ...state,
      };
  }
};

export default generalReducer;

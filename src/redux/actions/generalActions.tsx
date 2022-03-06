import { MemberData } from "../../core/models/MemberData";
import * as actionsTypes from "../actionTypes/generalActionTypes";

export function actionSetSpendingLimit(
  spendingLimit: number
): actionsTypes.SetSpendingLimitActionType {
  return {
    type: actionsTypes.SET_SPENDING_LIMIT,
    spendingLimit,
  };
}

export function actionSetMemberData(
  member: MemberData
): actionsTypes.SetMemberDataActionType {
  return {
    type: actionsTypes.SET_MEMBER_DATA,
    member,
  };
}

export function actionLoadMemberData(
  fail: (status: string) => void
): actionsTypes.LoadMemberDataActionType {
  return {
    type: actionsTypes.LOAD_MEMBER_DATA,
    fail,
  };
}

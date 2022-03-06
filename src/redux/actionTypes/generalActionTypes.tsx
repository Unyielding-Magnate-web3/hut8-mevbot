import { MemberData } from "../../core/models/MemberData";

export const SET_SPENDING_LIMIT = "GENERAL_ACTION_SET_SPENDING_LIMIT";
export interface SetSpendingLimitActionType {
  type: typeof SET_SPENDING_LIMIT;
  spendingLimit: number;
}

export const SET_MEMBER_DATA = "GENERAL_ACTION_SET_MEMBER_DATA";
export interface SetMemberDataActionType {
  type: typeof SET_MEMBER_DATA;
  member: MemberData;
}

export const LOAD_MEMBER_DATA = "GENERAL_ACTION_LOAD_MEMBER_DATA";
export interface LoadMemberDataActionType {
  type: typeof LOAD_MEMBER_DATA;
  fail: (status: string) => void;
}

export type generalActions =
  | SetSpendingLimitActionType
  | SetMemberDataActionType
  | LoadMemberDataActionType;

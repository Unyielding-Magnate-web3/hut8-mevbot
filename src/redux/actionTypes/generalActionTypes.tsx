export const SET_SPENDING_LIMIT = "GENERAL_ACTION_SET_SPENDING_LIMIT";
export interface SetSpendingLimitActionType {
  type: typeof SET_SPENDING_LIMIT;
  spendingLimit: number;
}

export type generalActions = SetSpendingLimitActionType;

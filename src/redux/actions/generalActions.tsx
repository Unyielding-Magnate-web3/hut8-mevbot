import * as actionsTypes from "../actionTypes/generalActionTypes";

export function actionSetSpendingLimit(
    spendingLimit: number,
  ): actionsTypes.SetSpendingLimitActionType {
    return {
      type: actionsTypes.SET_SPENDING_LIMIT,
      spendingLimit,
    };
  }
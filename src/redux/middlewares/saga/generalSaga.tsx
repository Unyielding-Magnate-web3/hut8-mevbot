import { all, put, takeLatest } from "redux-saga/effects";
import { fetch } from "../../../api/caller";
import { API_ENDPOINTS } from "../../../api/endpoints";
import { actionSetMemberData } from "../../actions";
import * as actionTypes from "../../actionTypes/generalActionTypes";

function* loadMemberData({ fail }: actionTypes.LoadMemberDataActionType) {
  try {
    const { data } = yield fetch(API_ENDPOINTS.MEMBER);
    if (data) {
      yield put(actionSetMemberData(data));
    } else {
      fail("Error");
    }
  } catch (error) {
    fail(JSON.stringify(error));
  }
}

export default function* root() {
  yield all([takeLatest(actionTypes.LOAD_MEMBER_DATA, loadMemberData)]);
}

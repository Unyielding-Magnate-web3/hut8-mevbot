import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../middlewares/saga";
import rootReducer from "../reducers";
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

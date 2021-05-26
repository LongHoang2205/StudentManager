import { createStore, applyMiddleware } from "redux";
import reducers from "../Reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../../Saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;

import { createStore, combineReducers } from "redux";
import { reducer as AppReducer } from "../reducers";

export interface IUserState {
  name: string;
  age: number;
}

export interface IAppState {
  app: IUserState,
}

const reducers = combineReducers({
  app: AppReducer,
});

const store = createStore(reducers);

export { store };

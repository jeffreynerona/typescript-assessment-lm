import { AppEvents } from "../events";
import { IAction } from "../actions";
import { IUserState } from '../store';

const initialState: IUserState = {
  name: '',
  age: 0,
};

const reducer = (state = initialState, action: IAction): IUserState => {
  switch (action.type) {
    case AppEvents.SET_AGE: {
      return {
        ...state,
        age: action.payload,
      };
    }
    case AppEvents.SET_NAME: {
      return {
        ...state,
        name: action.payload,
      }
    }
    default:
      return state;
  }
}

export { reducer };

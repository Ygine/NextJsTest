import { createStore, Reducer, AnyAction } from 'redux';
import rootReducer from "./rootReducer";
import { MakeStore, createWrapper, HYDRATE } from 'next-redux-wrapper';
import { StoreState } from './types';


// const reducer: Reducer<StoreState, AnyAction> = (state, action) => {
const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  }
  return rootReducer(state, action);
};

export const makeStore: MakeStore<StoreState> = (initialState: {}) => {
  return createStore(reducer);
};

export const wrapper = createWrapper<StoreState>(makeStore);

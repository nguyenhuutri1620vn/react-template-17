import Immutable, { fromJS } from 'immutable';
import * as nameActList from './consts';
import { ImmutableState } from '#root/app/types';

const getInitData = () => {
  return {
    isLoading: false,
    isMaintaining: false,
    userProfile: null,
  };
};

const initialState = fromJS(getInitData());

const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case nameActList.INIT_DATA:
      return state.set('isLoading', true);
    // App status
    case nameActList.SET_LOADING:
      return state.set('isLoading', action.payload);
    case nameActList.SET_MAINTAINING:
      return state.set('isMaintaining', action.payload);

    case nameActList.SET_USER_PROFILE:
      return state.set('userProfile', action.payload);

    case nameActList.CLEAR:
      return fromJS(getInitData());
    default:
      return state;
  }
};

export default reducer;
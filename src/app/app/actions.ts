import * as listTypes from './constant';

export function clear() {
  return {
    type: listTypes.CLEAR,
  };
}

export function initData() {
  return {
    type: listTypes.INIT_DATA,
  };
}

export const setLoading = (payload: boolean) => {
  return {
    type: listTypes.SET_LOADING,
    payload,
  };
};
export const setMaintaining = (payload: boolean) => {
  return {
    type: listTypes.SET_MAINTAINING,
    payload,
  };
};

export function setUserProfile(payload: any) {
  return {
    type: listTypes.SET_USER_PROFILE,
    payload,
  };
}

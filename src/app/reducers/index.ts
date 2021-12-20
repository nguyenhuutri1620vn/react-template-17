import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import history from 'app/stores/history';

export let rootReducer = combineReducers({});

export default function createReducer(injectedReducers = {}) {
  // @ts-ignore
  rootReducer = combineReducers({
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}

export type RootState = ReturnType<typeof rootReducer>;

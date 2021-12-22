import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import history from 'app/stores/history';

import languageReducer from 'app/providers/LanguageProvider/reducer';

export let rootReducer = combineReducers({});

export default function createReducer(injectedReducers = {}) {
  // @ts-ignore
  rootReducer = combineReducers({
    router: connectRouter(history),
    languageReducer,
    ...injectedReducers,
  });

  return rootReducer;
}

export type RootState = ReturnType<typeof rootReducer>;

import { combineReducers } from '@reduxjs/toolkit';
import { PAGES_NAMES } from '../../utils/objects';
import callsReducer from './calls-page-reducer/calls-reducer';

export const rootReducer = combineReducers({
  [PAGES_NAMES.CALLS_PAGE]: callsReducer
});

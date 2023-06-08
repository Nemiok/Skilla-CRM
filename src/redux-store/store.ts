import { createMangoAPI, createPartnershipAPI } from './../services/api';
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from './reducers/root-reducer';

const mangoAPI = createMangoAPI()
const partnershipAPI = createPartnershipAPI()

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          mangoAPI,
          partnershipAPI
        }
      }
    })
})

export default store
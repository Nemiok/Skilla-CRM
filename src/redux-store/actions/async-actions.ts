import { AxiosInstance } from 'axios';
import { AppDispatchType, StateType } from '../../types/state-type';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICallsResponse } from '../../types/calls';
import { MANGO_API_ROUTES } from '../../utils/objects';
import { IThunkExtraField } from '../../types/thunk-related';
const config = {
  headers: { authorization: 'Bearer testtoken' },
}

export const fetchCallsListAction = createAsyncThunk<
  ICallsResponse,
  undefined,
  {
    dispatch: AppDispatchType;
    state: StateType;
    extra: IThunkExtraField;
  }
>('calls/getCalls', async (_, { extra: { mangoAPI } }) => {
  const { data } = await mangoAPI.post<ICallsResponse>(MANGO_API_ROUTES.GET_CALLS, _, config)

  return data
})
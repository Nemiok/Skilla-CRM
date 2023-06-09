import { AxiosInstance } from 'axios';
import { AppDispatchType, StateType } from '../../types/state-type';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICallsResponse } from '../../types/calls';
import { MANGO_API_ROUTES } from '../../utils/objects';
import { IThunkExtraField } from '../../types/thunk-related';

const config = {
  headers: {
    authorization: 'Bearer testtoken'
  },
}

const configForRequestMP3 = {
  headers: {
    'Authorization': 'Bearer testtoken',
    'Content-type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
    'Content-Transfer-Encoding': 'binary',
    'Content-Disposition': `filename="record.mp3"`,
  }
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

export const fetchRecordAction = createAsyncThunk<
  {
    callID: number,
    data: string
  },
  {
    callID: number,
    recordID: string
  },
  {
    dispatch: AppDispatchType;
    state: StateType;
    extra: IThunkExtraField;
  }
>('calls/getRecord', async ({ callID, recordID }, { extra: { mangoAPI } }) => {
  const { data } = await mangoAPI.options(`${MANGO_API_ROUTES.GER_RECORD}/${recordID}`, configForRequestMP3)
  return { callID, data }
})
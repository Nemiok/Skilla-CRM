import { ICallsPageState, ILoadingStatus } from './../../../types/calls';
import { Action, ActionCreator, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SLICES_NAMES } from '../../../utils/objects';
import { fetchCallsListAction } from '../../actions/async-actions';
import { AxiosError } from 'axios';

const initialState: ICallsPageState =
{
  results: [],
  error: null,
  loading_status: ILoadingStatus.idle
}


const callsReducer = createSlice({
  name: SLICES_NAMES.CALLS,
  initialState,
  reducers: {
    setLoadingState(state, action: PayloadAction<ILoadingStatus>) {
      state.loading_status = action.payload
    },
    setErrorNull(state, _) {
      state.error = null
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCallsListAction.fulfilled, (state, action) => {
        console.log(action.payload.results)
        state.results = action.payload.results
        state.error = null
        state.loading_status = ILoadingStatus.idle

      })
      .addCase(fetchCallsListAction.pending, (state, action) => {
        state.loading_status = ILoadingStatus.loading
      })
      .addCase(fetchCallsListAction.rejected, (state, action) => {
        state.results = []
        state.error = action.error as AxiosError
        state.loading_status = ILoadingStatus.idle
      })

  },
});

export const { setLoadingState, setErrorNull } = callsReducer.actions;

export default callsReducer.reducer

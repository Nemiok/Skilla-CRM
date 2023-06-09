import { ICallsPageState, ILoadingStatus } from './../../../types/calls';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SLICES_NAMES } from '../../../utils/objects';
import { fetchCallsListAction, fetchRecordAction } from '../../actions/async-actions';
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
    },

    selectCall(state, action: PayloadAction<{ callID: number }>) {
      const call = state.results.find(call => call.id === action.payload.callID)
      if (call !== undefined) {
        call.selected = !call.selected
      }
    },

    selectAllCalls(state, action: PayloadAction<{ status: boolean }>) {
      state.results.forEach(call => call.selected = action.payload.status)
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCallsListAction.fulfilled, (state, action) => {
        const res = action.payload.results.map(item => ({
          ...item,
          audio: item.audio || '',
          selected: false
        }))
        state.results = res
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

      .addCase(fetchRecordAction.fulfilled, (state, action) => {
        const call = state.results.find(call => call.id === action.payload.callID)
        if (call !== undefined) {
          call.audio = action.payload.data
        }
      })

  },
});

export const { setLoadingState, setErrorNull, selectCall, selectAllCalls } = callsReducer.actions;

export default callsReducer.reducer

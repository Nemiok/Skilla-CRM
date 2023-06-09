import { AxiosError } from "axios";
import { ICallsResultField, ILoadingStatus } from "../../../types/calls";
import { StateType } from "../../../types/state-type";

export const getCallsPageLoadingStatus = (state: StateType): ILoadingStatus => state.CALLS_PAGE.loading_status
export const getCallsPageErrorStatus = (state: StateType): AxiosError | null => state.CALLS_PAGE.error
export const getCalls = (state: StateType): ICallsResultField[] => state.CALLS_PAGE.results

export const getCallSelectedStatus = (state: StateType, id: number): boolean | undefined => {
  const call = state.CALLS_PAGE.results.find(call => call.id === id)
  if (call !== undefined && call.audio !== undefined) {
    return call.selected
  }
}
export const getAudioFileFromCall = (state: StateType, id: number): string | undefined => {
  const call = state.CALLS_PAGE.results.find(call => call.id === id)
  if (call !== undefined && call.audio !== undefined) {
    return call.audio
  }
}




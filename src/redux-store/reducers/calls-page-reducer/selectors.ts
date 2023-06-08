import { AxiosError } from "axios";
import { ILoadingStatus } from "../../../types/calls";
import { StateType } from "../../../types/state-type";

export const getCallsPageLoadingStatus = (state: StateType): ILoadingStatus => state.CALLS_PAGE.loading_status
export const getCallsPageErrorStatus = (state: StateType): AxiosError | null => state.CALLS_PAGE.error


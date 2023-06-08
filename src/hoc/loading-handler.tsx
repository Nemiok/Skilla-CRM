import Loader from '../components/loader'
import React, { ReactNode } from 'react'
import { useAppSelector } from '../redux-store/hooks'
import { getCallsPageLoadingStatus } from '../redux-store/reducers/calls-page-reducer/selectors'
import { ILoadingStatus } from '../types/calls'

interface ILoadingHandlerProps {
  children: ReactNode
}

const LoadingHandler = ({ children }: ILoadingHandlerProps) => {
  const calls_page_loading_status = useAppSelector(getCallsPageLoadingStatus)

  if (calls_page_loading_status === ILoadingStatus.loading) {
    return <Loader />
  }

  return (
    <>
      {children}
    </>
  )
}

export default React.memo(LoadingHandler)
import React, { useEffect } from 'react'
import { useAppDispatch } from '../redux-store/hooks';
import { fetchCallsListAction } from '../redux-store/actions/async-actions';
import { setErrorNull, setLoadingState } from '../redux-store/reducers/calls-page-reducer/calls-reducer';
import { ILoadingStatus } from '../types/calls';
import LoadingHandler from '../hoc/loading-handler';

const CallsPage = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCallsListAction())
  }, [])



  return (
    <LoadingHandler>
      CallsPage
    </LoadingHandler>
  )
}

export default React.memo(CallsPage) 
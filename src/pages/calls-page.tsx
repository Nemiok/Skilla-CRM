import React, { useEffect, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '../redux-store/hooks';
import { fetchCallsListAction } from '../redux-store/actions/async-actions';
import LoadingHandler from '../hoc/loading-handler';
import Table from '../components/table';
import { getCalls } from '../redux-store/reducers/calls-page-reducer/selectors';

const CallsPage = () => {
  const dispatch = useAppDispatch()
  const calls = useAppSelector(getCalls)
  const tableHeadings = useMemo(() => ['', 'Тип', 'Время', 'Сотрудник', 'Звонок', 'Источник', 'Оценка', 'Длительность'], [])

  useEffect(() => {
    dispatch(fetchCallsListAction())
  }, [])

  return (
    <LoadingHandler>
      <Table tbodyData={calls} theadData={tableHeadings} />
    </LoadingHandler>
  )
}

export default React.memo(CallsPage) 
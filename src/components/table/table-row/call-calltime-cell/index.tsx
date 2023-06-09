import React, { useEffect } from 'react'
import { useAppDispatch } from '../../../../redux-store/hooks'
import { fetchRecordAction } from '../../../../redux-store/actions/async-actions'

interface ICallCalltimeCellProps {
  isCallSuccess: boolean,
  minutes: string,
  seconds: string,
  recordID: string
}

const CallCalltimeCell = ({ isCallSuccess, minutes, seconds, recordID }: ICallCalltimeCellProps) => {
  const dispatch = useAppDispatch()

  return (
    <td className="table-row__cell">
      {isCallSuccess && `${minutes}:${seconds}`}
    </td>
  )
}

export default React.memo(CallCalltimeCell)
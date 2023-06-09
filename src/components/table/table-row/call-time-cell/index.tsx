import React from 'react'

interface ICallTimeCellProps {
  DHours: string,
  DMinutes: string
}

const CallTimeCell = ({ DHours, DMinutes }: ICallTimeCellProps) => {
  return (
    <td className="table-row__cell">{`${DHours}:${DMinutes}`}</td>
  )
}

export default React.memo(CallTimeCell)
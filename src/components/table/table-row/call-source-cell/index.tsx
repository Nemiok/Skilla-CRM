import React from 'react'

interface ICallSourceCellProps {
  source: string
}

const CallSourceCell = ({ source }: ICallSourceCellProps) => {
  return (
    <td className="table-row__cell table-row__source-cell">{source ? source : 'Rabota.ru'}</td>

  )
}

export default React.memo(CallSourceCell)
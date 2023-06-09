import React from 'react'
import formatRussianPhoneNumber from '../../../../utils/functions/format-russian-phone-number'

interface ICallPhoneCellProps {
  isCallIncoming: boolean,
  fromNumber: string,
  toNumber: string
}

const CallPhoneCell = ({ fromNumber, isCallIncoming, toNumber }: ICallPhoneCellProps) => {
  return (
    <td className="table-row__cell">{isCallIncoming ? formatRussianPhoneNumber(fromNumber) : formatRussianPhoneNumber(toNumber)}</td>

  )
}

export default React.memo(CallPhoneCell)
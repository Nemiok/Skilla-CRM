import React from 'react'
import SVG_ICONS_CALLS_PAGE from '../../../../assets/images/svg-icons-calls-page'

interface ICallTypeCellProps {
  isCallIncoming: boolean,
  isCallSuccess: boolean
}

const CallTypeCell = ({ isCallIncoming, isCallSuccess }: ICallTypeCellProps) => {

  const isCallInAndSuccess = isCallIncoming && isCallSuccess
  const isCallInAndFail = isCallIncoming && !isCallSuccess

  const isCallOutAndSuccess = !isCallIncoming && isCallSuccess
  const isCallOutAndFail = !isCallIncoming && !isCallSuccess

  return (
    <td className="table-row__cell">{isCallInAndSuccess ? SVG_ICONS_CALLS_PAGE.CALL_IN_SUCCESS :
      isCallInAndFail ? SVG_ICONS_CALLS_PAGE.CALL_IN_FAIL :
        isCallOutAndSuccess ? SVG_ICONS_CALLS_PAGE.CALL_OUT_SUCCESS :
          isCallOutAndFail ? SVG_ICONS_CALLS_PAGE.CALL_OUT_FAIL : '?'}
    </td>
  )
}

export default React.memo(CallTypeCell)
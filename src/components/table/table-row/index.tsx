import React, { useMemo, useState, useRef } from "react";
import { ICallsResultField } from "../../../types/calls";
import processDate from "../../../utils/functions/processDate";
import './styles.css'
import processSecondsToMinutes from "../../../utils/functions/process-seconds-to-minutes";
import CallTypeCell from "./call-type-cell";
import CallTimeCell from "./call-time-cell";
import CallAvatarCell from "./call-avatar-cell";
import CallPhoneCell from "./call-phone-cell";
import CallSourceCell from "./call-source-cell";
import CallRatingCell from "./call-rating-cell";
import CallCalltimeCell from "./call-calltime-cell";
import { useAppDispatch, useAppSelector } from "../../../redux-store/hooks";
import { fetchRecordAction } from "../../../redux-store/actions/async-actions";
import { getAudioFileFromCall, getCallSelectedStatus } from "../../../redux-store/reducers/calls-page-reducer/selectors";
import AudioControllerCell from "./audio-controller-cell";
import CustomCheckbox from "./custom-checkbox";
import { selectCall } from "../../../redux-store/reducers/calls-page-reducer/calls-reducer";

interface ITableRow {
  data: ICallsResultField
}

const TableRow = ({ data }: ITableRow) => {

  const dispatch = useAppDispatch()

  const audio = useAppSelector(state => getAudioFileFromCall(state, data.id))
  const selectionStatus = useAppSelector(state => getCallSelectedStatus(state, data.id))

  const [isDownloaded, setIsDownloaded] = useState(false)
  const [isRecordVisible, setIsRecordVisible] = useState(false)
  const [shouldRecordBeVisible, setShouldRecordBeVisible] = useState(true)

  const isChecked = useAppSelector(state => getCallSelectedStatus(state, data.id))

  const handleCheckboxChange = () => {
    dispatch(selectCall({ callID: data.id }))
  };

  const getRecord = (recordID: string) => {
    if (recordID.length === 0) return

    if (!shouldRecordBeVisible) return

    if (isDownloaded) {
      setIsRecordVisible(true)
      return
    }

    dispatch(fetchRecordAction({ callID: data.id, recordID: data.record }))
    setIsDownloaded(true)
    setIsRecordVisible(true)
  }

  const closeController = (e: MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    setIsRecordVisible(false)
    setShouldRecordBeVisible(false)
  }

  const handleOnMouseLeave = () => {
    setShouldRecordBeVisible(true)
  }

  const isCallIncoming = useMemo(() => Number(data.in_out) === 1, [data.in_out])
  const isCallSuccess = useMemo(() => data.status === 'Дозвонился', [data.status])

  const { DHours, DMinutes } = useMemo(() => processDate(data.date), [data.date])
  const { minutes, seconds } = useMemo(() => processSecondsToMinutes(data.time), [data.time])

  return (
    <tr onMouseEnter={() => getRecord(data.record)} onMouseLeave={handleOnMouseLeave} className={isChecked ? "table-row table-row-active" : "table-row"}>
      <td className="table-row__checkbox-cell">
        <CustomCheckbox checked={isChecked} onChange={handleCheckboxChange} />
      </td>
      <CallTypeCell isCallIncoming={isCallIncoming} isCallSuccess={isCallSuccess} />
      <CallTimeCell DHours={DHours} DMinutes={DMinutes} />
      <CallAvatarCell personAvatar={data.person_avatar} />
      <CallPhoneCell fromNumber={data.from_number} toNumber={data.to_number} isCallIncoming={isCallIncoming} />
      <CallSourceCell source={data.source} />
      <CallRatingCell />
      {isRecordVisible ?
        <AudioControllerCell timeInSeconds={data.time} closeController={closeController} record={audio} />
        : <CallCalltimeCell recordID={data.record} isCallSuccess={isCallSuccess} minutes={minutes} seconds={seconds} />}
    </tr>
  );
};

export default React.memo(TableRow);
import React from 'react'

interface ICallAvatarCellProps {
  personAvatar: string
}

const CallAvatarCell = ({ personAvatar }: ICallAvatarCellProps) => {
  return (
    <td className="table-row__cell">
      <img className="calls-page__table-row-user-image" src={personAvatar} alt="user_avatar" />
    </td>

  )
}

export default React.memo(CallAvatarCell)
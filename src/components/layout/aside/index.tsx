import React, { ReactNode } from 'react'
import './styles.css'
import processDate from '../../../utils/functions/processDate'

interface IAsideProps {
  pageRelatedElements?: ReactNode
}

const Aside = ({ pageRelatedElements = null }: IAsideProps) => {
  const { DDay, DWeekdayName, DMonthName } = processDate(new Date())

  return (
    <aside className='aside'>
      <div className='aside__date-container'>{`${DWeekdayName}, ${DDay} ${DMonthName}`}</div>
      {pageRelatedElements !== null &&
        <div>
          {pageRelatedElements}
        </div>}
    </aside>
  )
}

export default React.memo(Aside)
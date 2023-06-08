import './styles.css'
import React from 'react'

interface IHeaderButtonProps {
  clickHandler: () => void,
  value: string,
  icon: any
}

const HeaderButton = ({ clickHandler, value, icon }: IHeaderButtonProps) => {
  return (
    <button onClick={clickHandler} className='header-button'>
      <div className='header-button__value-container'>{value}</div>
      <div className='header-button__svg-icon-container'>
        {icon}
      </div>
    </button>
  )
}

export default React.memo(HeaderButton)
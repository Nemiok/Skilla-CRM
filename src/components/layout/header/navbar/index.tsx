import { PAGE_ROUTES } from '../../../../utils/objects'
import './styles.css'
import React from 'react'
import SVG_ICONS from '../../../../assets/images/Svg-Icons'
import CustomNavLink from './custom-nav-link'

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <CustomNavLink icon={SVG_ICONS.RESULTS} to={PAGE_ROUTES.RESULTS}>Итоги</CustomNavLink>
      <CustomNavLink icon={SVG_ICONS.ORDERS} to={PAGE_ROUTES.ORDERS}>Заказы</CustomNavLink>
      <CustomNavLink icon={SVG_ICONS.MESSAGES} to={PAGE_ROUTES.MESSAGES}>Сообщения</CustomNavLink>
      <CustomNavLink icon={SVG_ICONS.CALLS} to={PAGE_ROUTES.CALLS}>Звонки</CustomNavLink>
      <CustomNavLink icon={SVG_ICONS.COUNTERAGENTS} to={PAGE_ROUTES.COUNTERAGENTS}>Контрагенты</CustomNavLink>
      <CustomNavLink icon={SVG_ICONS.EXECUTORS} to={PAGE_ROUTES.EXECUTORS}>Исполнители</CustomNavLink>
      <CustomNavLink icon={SVG_ICONS.DOCUMENTS} to={PAGE_ROUTES.DOCUMENTS}>Документы</CustomNavLink>
      <CustomNavLink icon={SVG_ICONS.REPORTS} to={PAGE_ROUTES.REPORTS}>Отчеты</CustomNavLink>
      <CustomNavLink icon={SVG_ICONS.KNOWLEDGE} to={PAGE_ROUTES.KNOWLEDGE}>База знаний</CustomNavLink>
      <CustomNavLink icon={SVG_ICONS.SETTINGS} to={PAGE_ROUTES.SETTINGS}>Настройки</CustomNavLink>
    </nav>
  )
}

export default React.memo(Navbar)
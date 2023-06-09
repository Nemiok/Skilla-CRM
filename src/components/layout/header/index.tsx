import { Link } from 'react-router-dom'
import SVG_ICONS from '../../../assets/images/Svg-Icons'
import Navbar from './navbar'
import { useCallback } from 'react'
import './styles.css'
import { PAGE_ROUTES } from '../../../utils/objects'
import HeaderButton from './header-button'

const Header = () => {
  const callbacks = {
    addOrder: useCallback(() => { console.log('add order') }, []),
    doPayment: useCallback(() => { console.log('do payment') }, []),

  }

  return (
    <header>
      <Link to='/' className='App-Logo-Container'>
        {SVG_ICONS.APP_LOGO}
      </Link>

      <Navbar />

      <div className='header__buttons-container'>
        <HeaderButton icon={SVG_ICONS.ADD_ORDER} clickHandler={callbacks.addOrder} value='Добавить заказ' />
        <HeaderButton icon={SVG_ICONS.ADD_PAYMENT} clickHandler={callbacks.doPayment} value='Оплата' />
      </div>
    </header>
  )
}

export default Header
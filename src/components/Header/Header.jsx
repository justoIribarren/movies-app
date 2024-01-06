import { Link, NavLink } from 'react-router-dom'
import SearchHeader from '../SearchHeader/SearchHeader'
import { useState } from 'react'

export default function Header () {
  const [menu, setMenu] = useState(false)
  const handleToggle = (e) => {
    e.target.classList.toggle('nav__menu--active')
    e.target.classList.contains('nav__menu--active')
      ? setMenu(true)
      : setMenu(false)
  }
  return (
    <header className='header'>
      <nav className='header__nav nav'>
        <Link to='/'><h1 className='header__logo'>MOVIES APP</h1></Link>
        <button className='material-symbols-rounded nav__menu button' onClick={(e) => handleToggle(e)}>menu</button>
        <div className={`nav__wrapper ${menu ? 'nav__wrapper--show' : ''}`}>
          <ul className='nav__list'>
            <li className='nav__li'>
              <NavLink to='/movie' className='link-hover nav__link'>Peliculas</NavLink>
            </li>
            <li className='nav__li'>
              <NavLink to='/tv' className='link-hover nav__link'>Series</NavLink>
            </li>
          </ul>
          <SearchHeader />
        </div>
      </nav>

    </header>
  )
}

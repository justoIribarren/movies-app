import { GitHub, LinkedIn } from '../../assets/Icons/Icons'

export default function Footer () {
  return (
    <footer className='footer'>
      <div className='footer__contact'>
        <div className='footer__contact--name'>
          <span className='footer__name--link'>Hecho por</span>
          <a href='https://justoiribarren.github.io/' target='_blank' rel='noopener noreferrer' className='footer__link'> Justo Iribarren </a>
        </div>

        <a href='https://www.linkedin.com/in/justo-iribarren/' target='_blank' rel='noopener noreferrer' className='footer__link'>
          {LinkedIn}
        </a>
        <a href='https://github.com/justoIribarren' target='_blank' rel='noopener noreferrer' className='footer__link'>
          {GitHub}
        </a>
      </div>
      <div className='footer__credit'>
        <span>API: </span>
        <a href='https://www.themoviedb.org/' target='_blank' rel='noopener noreferrer' className='footer__link'>TheMovieDB</a>
      </div>
    </footer>
  )
}

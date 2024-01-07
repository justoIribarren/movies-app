import { Link } from 'react-router-dom'
import { APIConfig } from '../../API/APIUrl'
import NotFound from '../NotFound/NotFound'

export default function Card ({ item, category }) {
  return (
    <Link to={`/movies-app/${item.media_type || category}/${item.id}-${(item.title || item.name).replaceAll(' ', '-').toLowerCase()}`} onClick={() => window.scrollTo(0, 0)} className='card'>
      {item.poster_path
        ? <img src={APIConfig.img_url + item.poster_path} alt={item.title || item.name} className='card__img' />
        : <NotFound img='card' />}
      <h4 className='card__title'>{item.title || item.name}</h4>
    </Link>
  )
}

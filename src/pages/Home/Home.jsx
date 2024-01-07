import { Link } from 'react-router-dom'
import { APIConfig } from '../../API/APIUrl'
import CardList from '../../components/CardList/CardList'
import HeroSwiper from '../../components/HeroSwiper/HeroSwiper'

export default function Home () {
  return (
    <>
      <div className='hero'><HeroSwiper url={APIConfig.all.trending} /></div>

      <main className='main'>
        <CardList title='Tendencias de la semana' url={APIConfig.all.trending} />

        <CardList title='Películas' url={APIConfig.all.discover_movie} category='movie'>
          <Link className='link-hover link-hover--more' to='/movies-app/movie' onClick={() => window.scrollTo(0, 0)}>Ver más</Link>
        </CardList>

        <CardList title='Series de TV' url={APIConfig.all.discover_tv} category='tv'>
          <Link className='link-hover link-hover--more' to='/movies-app/tv' onClick={() => window.scrollTo(0, 0)}>Ver más</Link>
        </CardList>
      </main>
    </>
  )
}

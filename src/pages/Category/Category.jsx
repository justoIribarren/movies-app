// import { useParams } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { APIConfig } from '../../API/APIUrl'
import { useEffect, useState } from 'react'
import MovieGrid from '../../components/MovieGrid/MovieGrid'
import HeroSwiper from '../../components/HeroSwiper/HeroSwiper'

export default function Category () {
  const { category } = useParams()

  const [lists, setLists] = useState(null)
  const [listRender, setListRender] = useState(true)

  const movieLists = (opt, e) => {
    setListRender(false)
    if (opt === lists) return
    setLists(opt)
  }

  useEffect(() => setListRender(true), [category])

  return (
    <>
      <div className='hero'><HeroSwiper url={APIConfig.other.trending(category)} /></div>
      <main className='main main--category'>
        <div className='main__header'>
          <h2
            className='card-list__title card-list__title--btn'
            onClick={() => {
              setLists(null)
              setListRender(true)
            }}
          >{category === 'movie' ? 'Peliculas' : 'Series de TV'}
          </h2>
          <div className='main__buttons-list'>

            <button
              className={`button--list button ${lists === 'popular' ? 'button--active' : ''}`}
              onClick={(e) => movieLists('popular')}
            >
              Populares
            </button>

            <button
              className={`button--list button ${lists === 'top_rated' ? 'button--active' : ''}`}
              onClick={(e) => movieLists('top_rated')}
            >
              Más Valoradas
            </button>

            <button
              className={`button--list button ${lists === (category === 'movie' ? 'upcoming' : 'airing_today') ? 'button--active' : ''}`}
              onClick={(e) => movieLists(category === 'movie' ? 'upcoming' : 'airing_today')}
            >
              Estrenos
            </button>
          </div>
        </div>

        {listRender
          ? <MovieGrid url={APIConfig.other.trending(category)} category={category} />
          : <MovieGrid url={lists ? APIConfig.other.list(category, lists) : null} category={category} />}
      </main>
    </>
  )
}

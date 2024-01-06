import { useEffect, useState } from 'react'
import { APIConfig } from '../../../../API/APIUrl'
import NotFound from '../../../../components/NotFound/NotFound'
import getItems from '../../../../API/getItems'

export default function HeroDetails ({ url, category }) {
  const [results, setResults] = useState([])

  useEffect(() => {
    const addItems = async () => {
      const results = await getItems(url)
      setResults(results)
    }

    addItems()
  }, [url])

  return (
    <div className='hero'>
      {results &&
        <>
          <div className='hero__background-image' style={{ backgroundImage: `url('${results && APIConfig.img_url + results.backdrop_path}')` }} />
          <div className='hero__background hero__background--details' />
          <main className='hero__wrapper'>
            <div className='hero__info-wrapper hero__info-wrapper--details'>
              {results.poster_path ? <img className='hero__img' src={`${APIConfig.img_url}${results.poster_path}`} alt={results.original_name || results.original_title} /> : <NotFound img='hero' />}

              <div className='details'>
                <h3 className='hero__title'>{results.name || results.title}</h3>
                <div className='details__info'>
                  <span className='text--secondary'>{results.release_date?.split('-')[0] || results.first_air_date?.split('-')[0] + '-' + results.last_air_date?.split('-')[0]}</span>

                  {category === 'movie'
                    ? <span className='text--secondary'><span className='material-symbols-rounded icon' id='timer'>timer</span>{results.runtime} mins.</span>
                    : <span className='text--secondary'>{results.number_of_seasons} temporada/s</span>}

                  <span className='text--secondary'><span className='material-symbols-rounded icon' id='star'>star</span>{results.vote_average?.toFixed(1)} / 10</span>
                </div>
                <p className='hero__description hero__description--results'>{results.overview} </p>
                <ul className='genres'>
                  {results.genres?.map((genre, i) => <li key={i} className='genres__item'>{genre.name}</li>)}
                </ul>
              </div>
            </div>
          </main>
        </>}
    </div>
  )
}

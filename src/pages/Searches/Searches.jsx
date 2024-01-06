import { useParams } from 'react-router-dom'
import { APIConfig, API_KEY, API_URL } from '../../API/APIUrl'
import MovieGrid from '../../components/MovieGrid/MovieGrid'

export default function Searches () {
  const { keyword } = useParams()

  // https://api.themoviedb.org/3/search/multi?query=asdas&include_adult=false&language=en-US&page=1

  return (
    <main className='main main__searches'>
      <div className='main__header'>
        <h2>Resultados</h2>
      </div>

      <MovieGrid url={`${API_URL}${APIConfig.search_url}${API_KEY}&query=${keyword}&include_adult=false&language=es-MX&page=1`} keyword={keyword} />

    </main>
  )
}

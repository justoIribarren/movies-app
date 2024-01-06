import { useParams } from 'react-router-dom'
import { APIConfig } from '../../API/APIUrl'
import Cast from './components/Cast/Cast'
import HeroDetails from './components/HeroDetails/HeroDetails'
import CardList from '../../components/CardList/CardList'
import DetailsVideosList from '../../components/DetailsVideosList/DetailsVideosList'

export default function Details () {
  const { category, element } = useParams()
  const id = element.split('-')[0]

  return (
    <>
      <HeroDetails url={APIConfig.details.item_url(category, id)} category={category} />
      <div className='details__wrapper'>
        <Cast url={APIConfig.details.cast_url(category, id)} />
        <DetailsVideosList url={APIConfig.details.videos_url(category, id)} />
        <CardList url={APIConfig.details.similar_url(category, id)} title='Películas similares' category={category} />
      </div>
    </>
  )
}

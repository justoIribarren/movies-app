import { APIConfig } from '../../../../API/APIUrl'
import { Swiper, SwiperSlide } from 'swiper/react'
import NotFound from '../../../../components/NotFound/NotFound'
import { useEffect, useState } from 'react'
import getItems from '../../../../API/getItems'

export default function Cast ({ url }) {
  const [results, setResults] = useState([])

  useEffect(() => {
    const addItems = async () => {
      const { cast } = await getItems(url)
      setResults(cast)
    }
    addItems()
  }, [url])

  return (
    <div className='slider details__cast cast'>
      <h2 className='details__title'>Reparto</h2>

      <Swiper slidesPerView='auto' spaceBetween={5} grabCursor>
        {results.map((c, i) => {
          return (
            <SwiperSlide className='cast__item' key={i}>
              {c.profile_path ? <img src={APIConfig.img_url + c.profile_path} alt={c.name} className='cast__img' /> : <NotFound img='cast' />}
              <p className='cast__name'>{c.name}</p>
              <p className='cast__character'>{c.character}</p>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

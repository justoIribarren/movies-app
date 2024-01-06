import Card from '../Card/Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useEffect, useState } from 'react'
import getItems from '../../API/getItems'

export default function CardList ({ children, url, title, category }) {
  const [results, setResults] = useState([])

  useEffect(() => {
    const addItems = async () => {
      const { results } = await getItems(url)

      setResults(results)
    }

    addItems()
  }, [url])

  return (

    <section className='card-list'>
      <div className='card-list__header'>
        <h2 className='card-list__title'>{title}</h2>
        {children}
      </div>

      <Swiper slidesPerView='auto' spaceBetween={10}>
        {results && results.map((item, i) => <SwiperSlide className='card' key={i}><Card item={item} category={category} /></SwiperSlide>)}
      </Swiper>
    </section>
  )
}

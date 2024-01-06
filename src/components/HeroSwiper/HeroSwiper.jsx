import Hero from '../../components/Hero/Hero'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useEffect, useState } from 'react'
import getItems from '../../API/getItems'

export default function HeroSwiper ({ url }) {
  const [results, setResults] = useState([])

  useEffect(() => {
    const addItems = async () => {
      const { results } = await getItems(url)
      setResults(results)
    }
    addItems()
  }, [url])

  return (
    <>
      <Swiper
        slidesPerView={1}
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {results.slice(0, 5).map((d, i) => <SwiperSlide key={i}><Hero data={d} /></SwiperSlide>)}
      </Swiper>
    </>
  )
}

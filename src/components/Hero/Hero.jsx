// import { Swiper, SwiperSlide } from 'swiper'
import { APIConfig } from '../../API/APIUrl'
import { Link } from 'react-router-dom'

export default function Hero ({ data }) {
  return (
    <>
      {data &&
        <>
          <div className='hero__background-image' style={{ backgroundImage: `url('${data && APIConfig.img_url + data.backdrop_path}')` }} />
          <div className='hero__background' />
          <div className='hero__wrapper'>
            <div className='hero__info-wrapper'>
              <h3 className='hero__title'>{data.title || data.name}.</h3>
              <div className='hero__data details__info'>
                <span className='text--secondary'>{data.release_date?.split('-')[0] || data.first_air_date.split('-')[0]}</span>

                <span className='text--secondary'><span className='material-symbols-rounded' id='star'>star</span>{data.vote_average.toFixed(1)}</span>
              </div>
              <p className='hero__description'>{data.overview} </p>
              <Link to={`/${data.media_type}/${data.id}-${(data.title || data.name).replaceAll(' ', '-').toLowerCase()}`} className='hero__button'>
                <button className='button button--primary'>Más Información</button>
              </Link>
            </div>
          </div>
        </>}
    </>
  )
}

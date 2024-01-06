import { useEffect, useRef } from 'react'

export default function DetailsVideo ({ el }) {
  const iframeRef = useRef(null)

  useEffect(() => {
    const height = iframeRef.current.offsetWidth * 9 / 16 + 'px'
    iframeRef.current.setAttribute('height', height)
  }, [])
  return (
    <div>
      <h2 className='details__title'>{el.name}</h2>
      <iframe
        src={`https://www.youtube.com/embed/${el.key}`}
        ref={iframeRef}
        width='100%'
        frameBorder='0'
      />
    </div>
  )
}

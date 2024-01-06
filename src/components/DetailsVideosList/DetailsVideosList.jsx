import { useEffect, useState } from 'react'
import getItems from '../../API/getItems'
import DetailsVideo from '../DetailsVideo/DetailsVideo'

export default function DetailsVideosList ({ url }) {
  const [results, setResults] = useState([])

  useEffect(() => {
    const addItems = async () => {
      const { results } = await getItems(url)
      setResults(results.slice(0, 5))
    }
    addItems()
  }, [url])

  return (
    <>
      {results && results.map(r => <DetailsVideo key={r.id} el={r} />)}
    </>
  )
}

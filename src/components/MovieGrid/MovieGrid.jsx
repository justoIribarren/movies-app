import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import getItems from '../../API/getItems'
import LoadMore from '../LoadMore/LoadMore'

export default function MovieGrid ({ url, category, keyword }) {
  const [index, setIndex] = useState(1)
  const [itemList, setItemList] = useState([])
  const [totalPages, setTotalPages] = useState(null)

  useEffect(() => {
    const getList = async () => {
      // eslint-disable-next-line camelcase
      const { results, page, total_pages } = await getItems(url + 'page=1')
      setItemList(results)
      setIndex(page)
      setTotalPages(total_pages)
    }
    getList()
  }, [keyword, url])

  return (
    <>
      {itemList &&
        <ul className='card-list__body'>
          {itemList.map((item, i) => <Card item={item} key={i} category={category} />)}
        </ul>}

      {totalPages > index
        ? <LoadMore
            setIndex={setIndex}
            url={url + `&page=${index + 1}`}
            setItemList={setItemList}
            itemList={itemList}
          />
        : null}
    </>
  )
}

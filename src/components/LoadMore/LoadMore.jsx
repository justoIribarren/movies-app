import getItems from '../../API/getItems'

export default function LoadMore ({ setIndex, url, setItemList, itemList }) {
  const addItems = async () => {
    const { results, page } = await getItems(url)

    setIndex(page + 1)
    setItemList([...itemList, ...results])
  }

  return (
    <>
      <button className='load-more button button--primary' onClick={addItems}><span className='material-symbols-rounded'>add</span></button>
    </>
  )
}

const getItems = async (url) => {
  if (!url) return
  const options = { method: 'GET', headers: { accept: 'application/json' } }

  const response = await fetch(url, options)
  const data = await response.json()
  return data
}

export default getItems

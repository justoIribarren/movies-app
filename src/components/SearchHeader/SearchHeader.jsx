import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchHeader () {
  const [input, newInput] = useState('')
  const navigate = useNavigate()

  const handleOnChange = (e) => newInput(e.target.value)

  const handleOnSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${input}`)
  }

  return (
    <>
      <form className='header__form form' onSubmit={(e) => handleOnSubmit(e)}>
        <input type='search' className='form__input' id='' placeholder='Buscar' onChange={handleOnChange} value={input} />
        <button className='button form__button'>
          <span className='material-symbols-rounded form__icon'>search</span>
        </button>
      </form>
    </>
  )
}
